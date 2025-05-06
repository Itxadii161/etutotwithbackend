import React, { useEffect, useState } from 'react';
import TutorCard from './SMALL_components/TutorCard';
import image1 from '../assets/Top_tutors/Image1.png';
import image2 from '../assets/Top_tutors/Image2.png';
import image3 from '../assets/Top_tutors/Image3.png';
import image4 from '../assets/Top_tutors/Image4.png';
import image5 from '../assets/Top_tutors/Image5.png';

const TopTutors = () => {
    const [tutors, setTutors] = useState([]);

    useEffect(() => {
        const fetchTutors = async () => {
            const topTutors = [
                { id: "1", image: image1, name: 'Devan Lane', profession: 'Senior Developer', rating: '4.6', students: '854' },
                { id: "2", image: image2, name: 'Derrell Steward', profession: 'Digital Product Designer', rating: '4.9', students: '451,444' },
                { id: "3", image: image3, name: 'Jane Cooper', profession: 'UI/UX Designer', rating: '4.8', students: '435,671' },
                { id: "4", image: image4, name: 'Albert Flores', profession: 'Adobe Instructor', rating: '4.7', students: '511,123' },
                { id: "5", image: image5, name: 'Kathryn Murphy', profession: 'Lead Developer', rating: '4.2', students: '2,711' },
            ];
            setTutors(topTutors.slice(0, 5));
        };
        fetchTutors();
    }, []);

    return (
        <section className="h-[500px] flex justify-evenly flex-col items-center py-8">
            <header className='text-3xl font-bold mb-8'>
                Top instructor of the month
            </header>
            
            <div className='grid grid-cols-5 gap-6 w-full px-8 mb-8'>
                {tutors.map((tutor) => (
                    <TutorCard key={tutor.id} tutor={tutor} />
                ))}
            </div>
            
            <footer className='text-gray-600 text-center'>
                Thousands of students looking for an instructor. Start teaching & earning now!{' '}
                <a href="#" className="text-[#FF6636] hover:underline">
                    Become Instructor
                </a>
            </footer>
        </section>
    );
};

export default TopTutors;