export default function handler(req, res) {
    const { placeId, jobId } = req.query;

    if (!placeId || !jobId) {
        return res.status(400).send("Missing placeId or jobId");
    }

    // Roblox deep link
    const robloxLink = `roblox://experiences/start?placeId=${placeId}&gameInstanceId=${jobId}`;

    // Redirect the user
    res.setHeader("Location", robloxLink);
    res.status(302).end();
}
