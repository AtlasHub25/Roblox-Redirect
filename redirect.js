export default function handler(req, res) {
    const { placeId, jobId } = req.query;

    if (!placeId || !jobId) {
        return res.status(400).send("Missing placeId or jobId");
    }

    const robloxLink = `roblox://experiences/start?placeId=${placeId}&gameInstanceId=${jobId}`;
    res.setHeader("Location", robloxLink);
    res.status(302).end();
}
