-- 1. Faça uma consulta e traga todas as vendas do cliente com nome alfredo

SELECT *
FROM Venda
WHERE cliente_id = 1;

-- 2. Faça uma consulta e traga todas as vendas do vendedor 1

SELECT *
FROM Venda
WHERE vendedor_id = 1;

-- 3. Faça um update de todas as vendas do cliente com id 1
-- obs: como não ficou clara a proposta, optei pela atualização apenas do valor total, contendo comentado o de data.

UPDATE Venda
SET valor_total = 0 --, data = 2020-10-2
WHERE cliente_id = 1;

-- 4. Exclua os dados do vendedor com id 2

DELETE FROM Venda
WHERE vendedor_id = 2;

DELETE FROM Vendedor
WHERE id = 2;
