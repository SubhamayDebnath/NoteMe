export const homePage = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Home Page",
        })

    } catch (error) {
        console.log(error);
    }
}