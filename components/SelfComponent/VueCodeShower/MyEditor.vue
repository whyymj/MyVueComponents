<template>
    <div class="MyEditor">
        <h6>{{type}}</h6>
        <form @keydown.ctrl="beautifyCode"><textarea :id="editorId" :ref='editorId' placeholder="Code goes here..." name="code"></textarea></form>
    </div>
</template>

<script>
    import 'codemirror/theme/darcula.css'
    import 'codemirror/lib/codemirror.css'
    import 'codemirror/mode/javascript/javascript'
    import 'codemirror/mode/vue/vue'
    import 'codemirror/addon/scroll/simplescrollbars.css'
    import 'codemirror/addon/scroll/simplescrollbars'
    import 'codemirror/addon/hint/show-hint'　　
    import 'codemirror/addon/hint/javascript-hint'　　
    import 'codemirror/addon/hint/sql-hint'　　
    import 'codemirror/addon/hint/html-hint'　　
    import 'codemirror/addon/hint/xml-hint'　　
    import 'codemirror/addon/hint/anyword-hint'　　
    import 'codemirror/addon/hint/css-hint'　　
    import 'codemirror/addon/hint/show-hint.css'
    import 'codemirror/addon/fold/markdown-fold'
    import 'codemirror/mode/meta'
    import "codemirror/addon/fold/foldgutter.css"　　　　
    import "codemirror/addon/fold/foldcode"　　　　
    import "codemirror/addon/fold/brace-fold"
    import 'codemirror/addon/selection/active-line'
    export default {
        props: {
            type: {
                type: String,
                default: 'html'
            },
            width: {
                type: Number,
                default: 400
            },
            height: {
                type: Number,
                default: 400
            },
            placeholder: {
                type: String,
                default: 'Enter Something...'
            }
        },
        data() {
            return {
                editorId: '',
                bueatifier: '',
                bueatifyType: null,
                editor: null, //codemirror实例
                code: '', //输入的代码
            }
        },
        mounted() {
            this.editorId = this.getEditorId(); //获取独一无二的id
            this.$nextTick(() => {
                this.setmirror(); // 初始化codemirror
            })
            this.bueatifier = require('js-beautify'); //代码美化器的初始化
            this.bueatifyType = this.bueatifier[this.type]; //设定代码美化的类型html，js,css
        },
        methods: {
            beautifyCode() { // ctrl按键美化
                this.editor.setValue(this.bueatifyType(this.editor.getValue()))
            },
            getEditorId() { // 更新id
                let id = 'createEditorId';
                window[id] = window[id] ? window[id] : 'createEditorId_0';
                let tmp = window[id].split('_');
                window[id] = tmp[0] + '_' + (Number(tmp[1]) + 1);
                return window[id];
            },
            setmirror() { //初始化codemirror的方法，以及绑定emmet插件
                let that = this;
                this.editor = CodeMirror.fromTextArea(this.$refs[this.editorId], {
                    theme: 'darcula',
                    styleActiveLine: true,
                    mode: 'text/' + (that.type == 'js' ? 'javascript' : that.type), //设置编辑器类型html，javascript，css
                    lineWrapping: true, //代码折叠
                    foldGutter: true,
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                    matchBrackets: true, //括号匹配
                    extraKeys: {
                        "Ctrl": "autocomplete"
                    }, //输入s然后ctrl就可以弹出选择项  
                    lineNumbers: true, //显示行号
                    tabSize: 10,
                    // // define Emmet output profile
                    profile: 'xhtml',
                    // // readOnly:"nocursor",
                    smartIndent: true,
                    keymap: "defaule",
                });
                emmetCodeMirror(this.editor); //绑定emmet
                this.editor.on('change', () => { //change事件
                    this.code = this.editor.getValue();
                    this.$emit('coding', this.code, this.type, this.editorId);
                })
            }
        }
    }
</script>

<style lang='scss'>
    .MyEditor {
        border: 1px solid #666;
        margin: 0;
        width: 33%;
        background-color: rgb(248, 248, 248);
        h1 {
            margin: 0;
        }
        h6 {
            height: 24px;
            line-height: 24px;
            font-size: 16px;
        }
        pre {
            text-align: left;
            span {
                text-decoration: none!important;
                font-style: normal!important;
            }
        }
        .CodeMirror-scroll {
            height: 100%;
            width: 100%;
            overflow: auto;
        }
    }
</style>