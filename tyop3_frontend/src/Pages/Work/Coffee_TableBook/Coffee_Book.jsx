import React from 'react'
import "./style.scss";
import ProjectHead from '@/Components/Gsap/ProjectHead';
import GsapImage from '@/Components/Gsap/Image_Ani';

const Coffee_Book_Page = () => {
    return (
        <div className='Coffee_Book_Page'>
            <ProjectHead
                title="Coffee Table Book"
                category="Design"
                date="Pavana Valley Coffee Table Book - 2022"
                description="Coffee-table-book for the luxury villa project brand from Lonavla, Maharashtra."
            />
            <div className="hero-image">
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/coffeeTableBook/cover.webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/coffeeTableBook/book_page (14).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/coffeeTableBook/book_page (15).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/coffeeTableBook/book_page (16).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/coffeeTableBook/book_page (17).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/coffeeTableBook/book_page (18).webp"} />

                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/coffeeTableBook/book_page (19).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/coffeeTableBook/book_page (20).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/coffeeTableBook/book_page (21).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/coffeeTableBook/book_page (22).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/coffeeTableBook/book_page (3).webp"} />
                <GsapImage transitionStyle={{ y: "100%" }} height={"auto"} width={"100%"} src={"/Work/coffeeTableBook/book_page (1).webp"} />
            </div>
        </div>
    )
}

export default Coffee_Book_Page