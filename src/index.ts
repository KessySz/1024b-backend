import express from 'express'
import MysqlErrorHandle from './mysql_error_handle.js'
import connection from './mysql_connection.js'
import type { ResultSetHeader, RowDataPacket } from 'mysql2'
import cors from 'cors'  

const app = express()
app.use(cors())
app.use(express.json())

interface IQuantidadePedido extends RowDataPacket{
    quantidade_pedidos:number
}

app.post("/pessoas", async (req, res) => {
     const { id, nome } = req.body
        if (!id || !nome) {
    return res.status(400).json({ mensagem: "Campos id e nome são obrigatórios!"})
        }
    try {
        const [result] =
            await connection.execute<ResultSetHeader>(
       `INSERT INTO aula1.pessoa VALUES (?, ?)`,
       [id, nome]
    )
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err,res)
        mysqlErrorHandle.validar()
    }
})
app.post("/cadastro_produto_v2.", async (req, res) => {
     const { id, nome } = req.body
        if (!id || !nome) {
    return res.status(400).json({ mensagem: "Campos id e nome são obrigatórios!"})
        }
    try {
        const [result] =
            await connection.execute<ResultSetHeader>(
       `INSERT INTO aula1.produto VALUES (?, ?)`,
       [id, nome]
    )
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err,res)
        mysqlErrorHandle.validar()
    }
})
app.post("/cadastro_multiplos_produtos", async (req, res) => {
     const { id, nome } = req.body
        if (!id || !nome) {
    return res.status(400).json({ mensagem: "Campos id e nome são obrigatórios!"})
        }
    try {
        const [result] =
            await connection.execute<ResultSetHeader>(
       `INSERT INTO aula1.produto VALUES (?, ?)`,
       [id, nome]
    )
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err,res)
        mysqlErrorHandle.validar()
    }
})
app.put("/produto/:id", async (req, res) => {
     const { id } = req.params;

     let { nome, preco, categoria} = req.body;

     preco = preco ?? null;
     categoria = categoria ?? null;
      
     await connection.execute(
        `
        UPDATE produto
        SET nome = ?, preco = ?, categoria = ?
        WHERE id = ?
        `,
         [nome, preco, categoria, id]
     );
      return res.json({
        mensagem: "Produto substituído!"
      });
    
})
app.put("/produto_preco/:id", async (req, res) => {
     const { id } = req.params;

     let { preco, data_modificacao} = req.body;

     preco = preco ?? null;
     data_modificacao = data_modificacao ?? null;
      
     await connection.execute(
        `
        UPDATE produto
        SET preco = ?, data_modificacao = ?
        WHERE id = ?
        `,
         [preco, data_modificacao, id]
     );
      return res.json({
        mensagem: "Produto substituído!"
      });
    
})




app.listen(8000, () => {
    console.log("Servidor iniciado na porta 8000")
})
