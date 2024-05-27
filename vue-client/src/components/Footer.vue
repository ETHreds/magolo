<template>
    <div class="footer-section">

        <!-- Newsletter Start -->
        <div class="newsletter">
            <div class="container">
                <div class="section-header">
                    <h2>Subscribe Our Newsletter</h2>
                </div>
                <div class="form">
                    <!-- <input class="form-control" placeholder="Email here">
                        <button class="btn">Submit</button> -->
                    <InputGroup class="flex justify-content-center">
                        <div class="flex flex-row gap-2 border-noround align-items-center">
                            <InputText id="username" v-model="subEmail" placeholder="Enter Email"
                                class="border-noround" />
                        </div>
                        <Button label="Subscribe" class="type1" severity="warning" />
                    </InputGroup>
                </div>
            </div>
        </div>
        <!-- Newsletter End -->


        <!-- Footer Start -->
        <div class="footer">
            <div class="wrapper">
                <div class="container">
                    <div class="grid">
                        <div class="md:col-6 lg:col-4">
                            <div class="footer-about">
                                <h2>About Us</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu lectus a leo
                                    tristique dictum nec non quam. Suspendisse convallis, tortor eu placerat rhoncus,
                                    lorem
                                    quam iaculis felis, sed eleifend lacus neque id eros. Integer convallis volutpat
                                    neque
                                </p>
                            </div>
                        </div>
                        <div class="md:col-6 lg:col-8">
                            <div class="grid">
                                <div class="md:col-6 lg:col-4">
                                    <div class="footer-link">
                                        <h2>Services Areas</h2>
                                        <a href="">Civil Law</a>
                                        <a href="">Family Law</a>
                                        <a href="">Business Law</a>
                                        <a href="">Education Law</a>
                                        <a href="">Immigration Law</a>
                                    </div>
                                </div>
                                <div class="md:col-6 lg:col-4">
                                    <div class="footer-link">
                                        <h2>Useful Pages</h2>
                                        <a href="">About Us</a>
                                        <a href="">Practices</a>
                                        <a href="">Attorneys</a>
                                        <a href="">Case Studies</a>
                                        <a href="">FAQs</a>
                                    </div>
                                </div>
                                <div class="md:col-6 lg:col-4">
                                    <div class="footer-contact">
                                        <h2>Get In Touch</h2>
                                        <p><i class="fa fa-map-marker-alt"></i>123 Street, New York, USA</p>
                                        <p><i class="fa fa-phone-alt"></i>+012 345 67890</p>
                                        <p><i class="fa fa-envelope"></i>info@example.com</p>
                                        <div class="footer-social">
                                            <a href=""><i class="fab fa-twitter"></i></a>
                                            <a href=""><i class="fab fa-facebook-f"></i></a>
                                            <a href=""><i class="fab fa-youtube"></i></a>
                                            <a href=""><i class="fab fa-instagram"></i></a>
                                            <a href=""><i class="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container footer-menu">
                    <div class="f-menu">
                        <a href="">Terms of use</a>
                        <a href="">Privacy policy</a>
                        <a href="">Cookies</a>
                        <a href="">Help</a>
                        <a href="">FQAs</a>
                    </div>
                </div>
                <!-- <div class="container copyright">
                    <div class="row">
                        <div class="col-md-6">
                            <p>&copy; <a href="https://htmlcodex.com/law-firm-website-template">HTML Codex</a>, All Right Reserved.</p>
                        </div>
                        <div class="col-md-6">
                            <p>Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>

</template>

<script setup>

</script>

<style lang="scss" scoped>
/*******************************/
/********** Newsletter *********/
/*******************************/
.newsletter {
    position: relative;
    max-width: 900px;
    margin: 45px auto -140px auto;
    padding: 30px 15px;
    background: #aa9166;
    z-index: 1;
}

.newsletter .section-header {
    margin-bottom: 25px;
}

.newsletter .section-header h2::before,
.newsletter .section-header h2::after {
    border-color: #ffffff;
}

.newsletter .form {
    position: relative;
    max-width: 400px;
    margin: 0 auto;
}

.newsletter input {
    height: 50px;
    border: 2px solid #121518;
    border-radius: 0;
}

.newsletter .btn {
    position: absolute;
    top: 5px;
    right: 5px;
    height: 40px;
    padding: 8px 20px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    color: #aa9166;
    background: #121518;
    border-radius: 0;
    border: 2px solid #aa9166;
    transition: .3s;
}

.newsletter .btn:hover {
    color: #121518;
    background: #aa9166;
}


/*******************************/
/********* Footer CSS **********/
/*******************************/
.footer {
    position: relative;
    margin-top: 45px;
    padding-top: 180px;
    background: #121518;
    color: #ffffff;
    width: 100vw;
}

.footer .footer-about,
.footer .footer-link,
.footer .footer-contact {
    position: relative;
    margin-bottom: 45px;
    color: #999999;
}

.footer .footer-about h2,
.footer .footer-link h2,
.footer .footer-contact h2 {
    position: relative;
    margin-bottom: 30px;
    font-size: 25px;
    font-weight: 600;
    color: #aa9166;
}

.footer .footer-link a {
    display: block;
    margin-bottom: 10px;
    color: #999999;
    transition: .3s;
    text-decoration: none;
}

.footer .footer-link a::before {
    position: relative;
    content: ">";
    font-weight: 900;
    margin-right: 10px;
}

.footer .footer-link a:hover {
    color: #aa9166;
    letter-spacing: 1px;
}

.footer .footer-contact p i {
    width: 25px;
}

.footer .footer-social {
    position: relative;
    margin-top: 20px;
}

.footer .footer-social a {
    display: inline-block;
}

.footer .footer-social a i {
    margin-right: 15px;
    font-size: 18px;
    color: #aa9166;
}

.footer .footer-social a:last-child i {
    margin: 0;
}

.footer .footer-social a:hover i {
    color: #999999;
}

.footer .footer-menu .f-menu {
    position: relative;
    padding: 15px 0;
    background: #000000;
    font-size: 0;
    text-align: center;
}

.footer .footer-menu .f-menu a {
    color: #999999;
    font-size: 16px;
    margin-right: 15px;
    padding-right: 15px;
    border-right: 1px solid rgba(255, 255, 255, .3);
}

.footer .footer-menu .f-menu a:hover {
    color: #aa9166;
}

.footer .footer-menu .f-menu a:last-child {
    margin-right: 0;
    padding-right: 0;
    border-right: none;
}


.footer .copyright {
    padding: 30px 15px;
}

.footer .copyright p {
    margin: 0;
    color: #999999;
}

.footer .copyright .col-md-6:last-child p {
    text-align: right;
}

.footer .copyright p a {
    color: #aa9166;
    font-weight: 500;
    letter-spacing: 1px;
}

.footer .copyright p a:hover {
    color: #ffffff;
}

@media (max-width: 768px) {

    .footer .copyright p,
    .footer .copyright .col-md-6:last-child p {
        margin: 5px 0;
        text-align: center;
    }
}
</style>