
const Blog = ({blog}) => {
    const {question, answer} = blog;
    return (
        <div className="p-5 rounded-lg bg-white shadow-sm space-y-3">
            <h2 className="text-xl font-bold"> {question} </h2>
            <div className="border border-dashed border-gray-300"></div>
            <div>
                <p className="text-green-800 font-semibold">Answer: </p>
                <p> {answer} </p>
            </div>
            <div className="border border-dashed border-gray-300"></div>
            <p>Added at: 04/23/2025</p>
        </div>
    )
}

export default Blog;