import express from "express"

main()
async function main(){
    const app = express()
    app.get("/telegram", async (req, res) => {
        const request = req.body
        console.log(request)
        return res.status(200)
    })

    await app.listen("5050", () =>{
        console.log("listening on requests")
    })
}
