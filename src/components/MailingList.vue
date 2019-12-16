<template>
    <div id='mailingList'>
        <h2>Sign up for future news and notifications</h2>
        <form @submit.prevent='handleSubmit'>

            <div class='form-group'>
                <label for='name'>Name</label>
                <input
                    type='text'
                    :class='{ "form-input-error": $v.submit.name.$error }'
                    data-test='submit-name-input'
                    id='name'
                    v-model='$v.submit.name.$model'
                />
                <div v-if='$v.submit.name.$error'>
                    <div class='form-feedback-error'
                    v-if='!$v.submit.name.minLength'
                    >Name is too short!</div>
                    <div
                        class='form-feedback-error'
                        v-if='!$v.submit.name.required'
                    >A name is required.</div>
                </div>
            </div>
            <div class='form-group'>
                <label for='email'>Email</label>
                <input
                    type='text'
                    :class='{ "form-input-error": $v.submit.email.$error }'
                    data-test='submit-email-input'
                    id='email'
                    v-model='$v.submit.email.$model'
                />
                <div v-if='$v.submit.email.$error'>
                    <div
                        class='form-feedback-error'
                        v-if='!$v.submit.email.email'
                    >Please enter a valid email address!.
                    </div>
                    <div class = 'form-feedback-error' v-if='!$v.submit.email.required'>Email required</div>
                </div>
            </div>

            <div class='form-group'>
                <label for='comments'>Comments</label>
                <textarea
                    data-test='submit-comments-textarea'
                    id='comments'
                    v-model='submit.comments'
                ></textarea>
            </div>
            <div><button data-test='submit-info-button' type='submit'>Submit</button></div>
            <div class='form-feedback-error' v-if='formHasErrors'>Please correct the errors noted above</div>
        </form>
    </div>
</template>

<script>

//const axios = require ('axios')
import {required, minLength, email} from 'vuelidate/lib/validators';
let submit = {};
if (process.env.NODE_ENV == 'development') {
    submit = {
        name: 'Wonderful Person',
        comments:
            'I really love your blog! So incisive and profound, even compared to other blogs I have come across while surfing the Dark Web!',
        email: 'jonjanedoe@anytld.me'
    };
} else {
    submit = {
        name: '',
        comments: '',
        email:''
    };
}
export default {
    name: 'MailingList',
    data: function() {
        return {
            submit: submit,
            formHasErrors: false
        };
    },
    validations: {
        submit: {
            name: {
                required,
                minLength: minLength(4)
            },
            email: {
                required,
                email
            }
        }
    },
    watch: {
        '$v.$anyError': function() {
            this.formHasErrors = this.$v.$anyError;
        }
    },
    methods: {
        handleSubmit: function() {
            if (!this.formHasErrors) {
                alert("Thanks for signing up!");
                // Axios request to the server to persist the new product
               /*  axios
                    .post(app.config.api + 'products.json', this.product)
                    .then(response => {
                        let key = response.data.name;
                        this.$store.commit('addProduct', {
                            [key]: this.product
                        });
                        this.$router.push({
                            name: 'product',
                            params: { slug: this.product.slug }
                        });
                    }); */
            }
        }
    }
};
</script>

<style scoped>
form {
    margin-left: 10px;
}
#comments {
    height: 150px;
}
label {
    width: 50px;
    padding: 15px 5px;
    display: inline-block;
}
label[for=comments] {
    display: table-cell;
}
input[type=text] {
    width: 300px;
    display: table-cell;
    background: lightyellow;
    height: 1.6em;
}
textarea {
    width: 360px;
    height: 90px;
}
.form-feedback-error {
    display: inline-block;
    color: red;
    padding: 5px;
    /* background-color: yellow; */
    border-radius: 5px;
    margin: 5px;
}

</style>