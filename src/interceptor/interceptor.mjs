const interceptor = (execute) => async (req, res, next) => {
    try {
        const result = await execute(req, res, next);
        return res.json(result);
    } catch (e) {
        return res.status(500).json({
            message: 'error'
        })
    }
}

export default interceptor;