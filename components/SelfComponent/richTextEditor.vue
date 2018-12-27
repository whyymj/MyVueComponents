<template>
    <div>
        <textarea id='tinymce'></textarea>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        props: ['getCommand', 'defaultContent'],
        watch: {
            getCommand() {
                if (this.getCommand == 'getValue') {
                    this.$emit('getValue', tinymce.get('tinymce').getBody().innerHTML);
                } else if (this.getCommand == 'clearValue') {
                    this.$parent
                    if (tinymce.get('tinymce').getBody()) {
                        tinymce.get('tinymce').getBody().innerHTML = '';
                        this.$emit('getValue', '');
                    }
                } else if (this.getCommand == 'setValue') {
                    if (tinymce.get('tinymce').getBody()) {
                        tinymce.get('tinymce').getBody().innerHTML =  this.defaultContent; 
                        this.$emit('getValue', this.defaultContent);
                    }
                }
            },
        },
        mounted() {
            var that = this;
            tinymce.init({
                selector: '#tinymce',
                height: 500,
                theme: 'modern',
                plugins: 'print preview fullpage  searchreplace autolink directionality  visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor  insertdatetime advlist lists textcolor wordcount  imagetools   contextmenu colorpicker textpattern help',
                toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
                image_advtab: true,
                templates: [{
                        title: 'Test template 1',
                        content: 'Test 1'
                    },
                    {
                        title: 'Test template 2',
                        content: 'Test 2'
                    }
                ],
                content_css: [
                    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
                    '//www.tinymce.com/css/codepen.min.css'
                ],
                init_instance_callback: function() {
                    if (tinymce.get('tinymce').getBody()) {
                        tinymce.get('tinymce').getBody().innerHTML = '<br/>' + that.defaultContent;
                    }
                }
            });
        }
    }
</script>