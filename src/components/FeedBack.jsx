
const FeedBack = () => {
    return (
        <div className="w-[80%] mx-auto">
            <section className="py-6 border mt-5 rounded-3xl">
                <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
                    <div className="flex flex-col space-y-4 text-center lg:text-left">
                        <h1 className="text-5xl font-bold leading-none">Sent Us your Feedback</h1>
                        <p className="text-lg">Please help us with your valuable suggestions so that we can improve our service and bring it to your service. Your feedback is very important to us. We will try our best to implement your feedback. Your feedback is very important to us. We will try our best to implement your feedback. stay with us!</p>
                    </div>
                    <div className="items-center self-center justify-center flex-shrink-0 lg:justify-end">
                        <div className="w-full ">
                            <textarea className="p-6 outline-0 border rounded-2xl" placeholder="write your feedback here..." id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="w-full">
                            <button className="btn w-full bg-[#23BE0A] font-bold text-white">Sent</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeedBack;