---
title: 'Clean Architecture na prática: além dos diagramas'
description: 'As camadas são fáceis de desenhar e difíceis de manter. Algumas decisões que importam de verdade.'
pubDate: 2026-06-10
tags: ['arquitetura', 'dotnet', 'ddd']
---

Todo mundo já viu o diagrama de círculos concêntricos. O difícil não é desenhar
as camadas — é manter a dependência apontando para dentro quando o prazo aperta.

## A regra que realmente importa

A dependência sempre aponta para o domínio. O domínio não conhece banco, não
conhece HTTP, não conhece framework. Se a sua entidade importa `DbContext`,
a regra já foi quebrada.

```csharp
// Domínio: não conhece infraestrutura
public class Pedido
{
    private readonly List<Item> _itens = new();
    public IReadOnlyList<Item> Itens => _itens.AsReadOnly();

    public void AdicionarItem(Produto produto, int quantidade)
    {
        if (quantidade <= 0)
            throw new DomainException("Quantidade deve ser positiva.");

        _itens.Add(new Item(produto, quantidade));
    }
}
```

## Onde as pessoas erram

O erro mais comum não é a camada errada — é **vazar detalhe de infraestrutura
para o domínio** através do schema do banco. Se o seu modelo de domínio tem
campos como `created_at` ou `tenant_id` só porque o banco precisa, eles não
deveriam estar na entidade de negócio.

### Repository: interface no domínio, implementação fora

```csharp
// No domínio
public interface IPedidoRepository
{
    Task<Pedido?> ObterPorId(Guid id);
    Task Salvar(Pedido pedido);
}
```

A implementação concreta com EF Core vive na camada de infraestrutura. O domínio
só conhece o contrato.

## Vale a pena?

Para um CRUD simples, não. Clean Architecture cobra um custo de cerimônia que só
se paga quando há regra de negócio real e o projeto vai durar. Saber quando
**não** usar é tão importante quanto saber aplicar.
