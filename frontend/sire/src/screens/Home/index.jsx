import HomeLayout from "../../layouts/HomeLayout";
import Button from "../../components/Button";
import HomeCarousel from "../../components/Carousel";

export default function Home() {
    return (
        <HomeLayout>
            <Button text="Login" to="/login" />
            <Button text="Signup" to="/signup" />
            <HomeCarousel />
        </HomeLayout>
    )
}