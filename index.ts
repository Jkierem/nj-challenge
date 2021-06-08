import { opine, Response, Request } from "https://deno.land/x/opine@1.2.0/mod.ts";
import { parse } from 'https://deno.land/std/flags/mod.ts';

const app = opine()

app.get("/account-balance ", (req: Request, res: Response) => {
    res.setStatus(200).json({
        data: [
            { name: "Account 1", balance: 10, currency: "dgc" },
            { name: "Account 2", balance: 0.0001, currency: "btc" },
            { name: "Account 3", balance: 420, currency: "end" }
        ]
    })
})

app.get("/exchange-rates ", (req: Request, res: Response ) => {
    res.setStatus(200).json({
        data: [
            { id: "dgc", name: "DogeCoin", abbreviation: "DGC", rate: 0.332187 },
            { id: "btc", name: "Bitcoin", abbreviation: "BTC", rate: 32896.50 },
            { id: "end", name: "Endava Points", abbreviation: "END", rate: 1 }
        ]
    })
})

app.get("/destination-accounts ", (req: Request, res: Response ) => {
    res.setStatus(200).json({
        data: [
            {
                name: "Juan",
                id: 1,
            }
        ]
    })
})

app.get("*", (req: Request, res: Response ) => {
    res.setStatus(403).send("Forbidden")
})

const PORT = parse(Deno.args).port || 8000;
app.listen(PORT)
console.log(`Server running in port ${PORT}`);