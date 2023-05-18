import express from "express"

main()
async function main(){
    const app = express()
    app.post("/telegram", async (req, res) => {
        const request = req.body
        console.log(request)
        return res.status(200)
    })
    app.get("/", async (req,res) => {
        console.log("Index")
        return res.send("<h1>Olá</h1>").status(200)
    })

    app.listen(process.env.PORT || "5050", () =>{
        console.log("listening on requests")
    })
}
