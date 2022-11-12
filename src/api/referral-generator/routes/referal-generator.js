module.exports = {
    routes: [
        {
            method: "GET",
            path: "/user-referrals",
            handler: "referral-generator.referral"
        }
    ]
}