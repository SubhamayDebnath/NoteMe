export const getUserHomePage = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "User Home Page",
        })
    } catch (error) {
        console.log("object", error);
    }
}