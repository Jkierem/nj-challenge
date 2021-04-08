import { opine, Response, Request } from "https://deno.land/x/opine@1.2.0/mod.ts";
import { parse } from 'https://deno.land/std/flags/mod.ts';

const app = opine()

app.get("/accounts", (req: Request, res: Response) => {
    res.setStatus(200).json({
        data: "Hi there"
    })
})

app.get("/rates", (req: Request, res: Response ) => {
    res.setStatus(200).json({
        data: "Hi there"
    })
})

app.get("/subscribed", (req: Request, res: Response ) => {
    res.setStatus(200).json({
        data: "Hi there"
    })
})

app.get("*", (req: Request, res: Response ) => {
    res.setStatus(403).send("Forbidden")
})

const PORT = parse(Deno.args).port || 8000;
app.listen(PORT)
console.log(`Server running in port ${PORT}`);