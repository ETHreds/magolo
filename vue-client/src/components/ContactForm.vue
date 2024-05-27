<template>
    <div>
        <div class="contact-form">
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Your Name" required="required" />
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="Your Email" required="required" />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Subject" required="required" />
                </div>
                <div class="form-group">
                    <textarea class="form-control" placeholder="Message" required="required"></textarea>
                </div>
                <div>
                    <button class="btn" type="submit">Send Message</button>
                </div>
            </form>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.contact-form {
    position: relative;
    margin-bottom: 30px;
}

.contact-form input {
    height: 60px;
    border-radius: 0;
    border-width: 2px;
    border-color: #121518;
    width: 100%;
    margin-bottom: 30px;
}

.contact-form textarea {
    height: 190px;
    border-radius: 0;
    border-width: 2px;
    border-color: #121518;
    width: 100%;
    margin-bottom: 30px;
}

.contact-form .btn {
    padding: 16px 35px;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #aa9166;
    background: #121518;
    border: 2px solid #aa9166;
    border-radius: 0;
    transition: .3s;
}

.contact-form .btn:hover {
    color: #121518;
    background: #aa9166;
}
</style>