<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Poptip placement="right" width="400">
                    <Button>Click</Button>
                    <div class="api" slot="content">
                        <table>
                            <thead>
                                <tr>
                                    <th>Version</th>
                                    <th>Update Time</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0.9.5</td>
                                    <td>2016-10-26</td>
                                    <td>Add new components <code>Tooltip</code> and <code>Poptip</code></td>
                                </tr>
                                <tr>
                                    <td>0.9.4</td>
                                    <td>2016-10-25</td>
                                    <td>Add new components <code>Modal</code></td>
                                </tr>
                                <tr>
                                    <td>0.9.2</td>
                                    <td>2016-09-28</td>
                                    <td>Add new components <code>Select</code></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Poptip>
            </div>
        </componentShower>
    </div>
</template>
<script>
    import componentShower from '@/components/SelfComponent/UIDemos/componentMixinTemplate.vue'
    export default {
        mixins: [componentShower],
        data() {
            return {
                movieList: [{
                        name: 'The Shawshank Redemption',
                        url: 'https://movie.douban.com/subject/1292052/',
                        rate: 9.6
                    },
                    {
                        name: 'Leon:The Professional',
                        url: 'https://movie.douban.com/subject/1295644/',
                        rate: 9.4
                    },
                    {
                        name: 'Farewell to My Concubine',
                        url: 'https://movie.douban.com/subject/1291546/',
                        rate: 9.5
                    },
                    {
                        name: 'Forrest Gump',
                        url: 'https://movie.douban.com/subject/1292720/',
                        rate: 9.4
                    },
                    {
                        name: 'Life Is Beautiful',
                        url: 'https://movie.douban.com/subject/1292063/',
                        rate: 9.5
                    },
                    {
                        name: 'Spirited Away',
                        url: 'https://movie.douban.com/subject/1291561/',
                        rate: 9.2
                    },
                    {
                        name: 'Schindlers List ',
                        url: 'https://movie.douban.com/subject/1295124/',
                        rate: 9.4
                    },
                    {
                        name: 'The Legend of 1900',
                        url: 'https://movie.douban.com/subject/1292001/',
                        rate: 9.2
                    },
                    {
                        name: 'WALL·E',
                        url: 'https://movie.douban.com/subject/2131459/',
                        rate: 9.3
                    },
                    {
                        name: 'Inception',
                        url: 'https://movie.douban.com/subject/3541415/',
                        rate: 9.2
                    }
                ],
                randomMovieList: [], //随机排列的电影的列表
            }
        },
        methods: {
            changeLimit() { //随机抽取数组
                function getArrayItems(arr, num) { //输入整个列表随机抽取num个
                    const temp_array = [];
                    for (let index in arr) {
                        temp_array.push(arr[index]);
                    }
                    const return_array = [];
                    for (let i = 0; i < num; i++) {
                        if (temp_array.length > 0) {
                            const arrIndex = Math.floor(Math.random() * temp_array.length);
                            return_array[i] = temp_array[arrIndex];
                            temp_array.splice(arrIndex, 1);
                        } else {
                            break;
                        }
                    }
                    return return_array;
                }
                this.randomMovieList = getArrayItems(this.movieList, 5);
            }
        },
        mounted() {
            this.changeLimit();
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 32%;
    }
</style>