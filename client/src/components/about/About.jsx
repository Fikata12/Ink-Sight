import "./About.css";

export default function About() {
    return (
        <div>
            <div className="container image-container my-4">
                <img src="./public/big-logo.png" alt="Logo" />
            </div>
            <section class="mt-5 py-4 color-light-orange">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <h2 class="text-center mb-4">Who We Are</h2>
                            <p>
                                Welcome to Ink Sight, where literature comes to life through the eyes of our diverse community of readers.
                                Our platform is designed to connect book enthusiasts, share thoughts, and foster a love for reading.
                            </p>
                            <p>
                                Whether you're an avid reader, a casual book lover, or someone looking for recommendations, Ink Sight is the place for you.
                                Dive into a world of literary exploration, where words become windows into different worlds and ideas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-4">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <h2 class="text-center mb-4">Our Mission</h2>
                            <p>
                                Our mission is to create a vibrant and inclusive community where people can share their passion for books.
                                We believe in the power of storytelling to inspire, educate, and connect individuals from all walks of life.
                            </p>
                            <p>
                                Book Review App aims to be a hub for meaningful discussions, thoughtful reviews, and a source of inspiration for your next literary adventure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}