/* eslint-disable @next/next/no-img-element */

const VisaMap = () => {
  return (
    <section>
        <h2 className="text-center text-4xl font-semibold">Your Russian Visa Map</h2>
        <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg">
            <div className="w-16 h-16 mb-4">
            <img src="/certficate.png" alt="Apply" className="w-full h-full" />
            </div>
            <h2 className="text-xl font-bold mb-2">1. Choose</h2>
            <p>Choosing the right course with the best-matching university the first right step to make on the visa process. Our Affiliated Universities with huge lists of courses will provide you the professional assistance from this step.</p>
        </div>
        <div className="row-start-2 col-start-2 bg-gray-100 p-6 rounded-lg">
            <div className="w-16 h-16 mb-4">
            <img src="/school.png" alt="Apply" className="w-full h-full" />
            </div>
            <h2 className="text-xl font-bold mb-2">2. Apply</h2>
            <p>Once you have received the Letter of Offer, you will be directed to pay to the University Directly and OSIC. Your Counselor will guide you the right steps.</p>
        </div>
        <div className="row-start-3 col-start-1 bg-gray-100 p-6 rounded-lg">
            <div className="w-16 h-16 mb-4">
            <img src="/plane.png" alt="Fly" className="w-full h-full" />
            </div>
            <h2 className="text-xl font-bold mb-2">3. Fly</h2>
            <p>Once you obtain a visa, Book your tickets and prepare your travel.</p>
        </div>
        </div>
    </section>
  );
};

export default VisaMap;