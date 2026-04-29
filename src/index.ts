import express from 'express'
import MysqlErrorHandle from './mysql_error_handle.js'
import connection from './mysql_connection.js'
import type { RowDataPacket } from 'mysql2'

const app = express()
app.use(express.json())

interface IQuantidadePedido extends RowDataPacket{
    quantidade_pedido:number
}

app.get("/cliente_data_pedido", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT clientes.nome, pedidos.datapedido FROM clientes INNER JOIN pedidos ON clientes.idclientes= pedidos.clientes_idclientes`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err,res)
        mysqlErrorHandle.validar()
}
})

app.get("/pedidos_2026", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT idclientes, nome, cidade, idade, idpedidos, datapedido FROM clientes INNER JOIN pedidos ON clientes.idclientes= pedidos.clientes_idclientes WHERE datapedido>='2026-01-01' AND datapedido<='2026-12-31'`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err,res)
        mysqlErrorHandle.validar()
}
})
app.get("/quantidade_pedidos", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute<IQuantidadePedido[]>(`SELECT COUNT(*) AS quantidade_pedidos FROM dbteremercado.itenspedidos`)
            const [quantidadePedidos] = [...resultado]
        console.log(quantidadePedidos)
        res.status(200).json(quantidadePedidos)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err,res)
        mysqlErrorHandle.validar()
}
})
app.get("/quantidade_pedidos_clientes", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT clientes.nome, COUNT(*) AS quantidade_produtos FROM dbteremercado.clientes INNER JOIN dbteremercado.pedidos ON clientes.idclientes= pedidos.clientes_idclientes group by clientes.nome`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err,res)
        mysqlErrorHandle.validar()
}
})
app.get("/quantidade_produtos_por_cliente", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT clientes.nome, pedidos.idpedidos AS idpedido, SUM(quantidade) AS quantidade_pedidos FROM clientes INNER JOIN pedidos ON clientes.idclientes= pedidos.clientes_idclientes INNER JOIN itenspedidos ON itenspedidos.pedidos_idpedidos= pedidos.idpedidos GROUP BY clientes.nome, pedidos.idpedidos`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err,res)
        mysqlErrorHandle.validar()
}
})
app.get("/valor_pedido_total", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT clientes.nome, SUM(preco) AS valor_total FROM clientes INNER JOIN pedidos ON clientes.idclientes= pedidos.clientes_idclientes INNER JOIN itenspedidos ON itenspedidos.pedidos_idpedidos= pedidos.idpedidos INNER JOIN produtos ON itenspedidos.produtos_idprodutos= produtos.idprodutos GROUP BY clientes.nome`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err,res)
        mysqlErrorHandle.validar()
}
})


/* app.get("/pessoas", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT * FROM pessoa`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err,res)
        mysqlErrorHandle.validar()
    }
})//listar
app.post("/pessoas", async (req, res) => {
    try {
        const { id, nome } = req.body
        if (!id || !nome)
            return res.status(500).json({ mensagem: "Erro: Os dados de id ou nome estão incorretos!" })
        const [resultado, campos] =
            await connection.execute(`insert into pessoa values (?,?)`, [id, nome])
        console.log(resultado)
        res.status(201).json({ mensagem: "Sucesso" })
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err,res)
        mysqlErrorHandle.validar()
    }
})//Inserir
app.post("/cadastro_produto", async (req, res) => {
    try {
        const { id, nome, categoria, preco, data_criacao, data_modificacao } = req.body
        if (!id || !nome || !categoria || !preco || !data_criacao || !data_modificacao)
            return res.status(500).json({ mensagem: "Erro: Os dados de id,nome,categoria,preco,data_criacao,data_modificacao estão incorretos!" })
        const [resultado, campos] =
            await connection.execute(`insert into produto values (?,?,?,?,?,?)`, [id, nome, categoria, preco, data_criacao, data_modificacao])
        console.log(resultado)
        res.status(201).json({ mensagem: "Sucesso" })
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err,res)
        mysqlErrorHandle.validar()
    }
})
app.get("/listar_produtos", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT * FROM produto`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err,res)
        mysqlErrorHandle.validar()
    }
})

app.get("/listar_produtos_informatica", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT * FROM produto WHERE categoria='informática'`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err,res)
        mysqlErrorHandle.validar()
    }
})

app.get("/listar_produtos_caros", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT * FROM produto WHERE preco>100`)
        res.status(200).json(resultado)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err,res)
        mysqlErrorHandle.validar()
    }
}) */
//Criar o servidor
app.listen(8000, () => {
    console.log("Servidor iniciado na porta 8000")
})