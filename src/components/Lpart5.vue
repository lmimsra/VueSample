<template>
    <div>
        <strong>v-if</strong><br/>
        <label for="show">表示・非表示</label>
        <input type="checkbox" id="show" v-model="toggle"/>
        <p id="panel" v-if="toggle">
            指定された条件式がtrueの時にだけこのメッセージが表示されます
        </p>
        <p v-else>
            現在非表示状態です
        </p>
        <strong>v-else-if</strong><br/>
        <form>
            <select v-model="season">
                <option value="">季節を選択してください</option>
                <option value="spring">春</option>
                <option value="summer">夏</option>
                <option value="autumn">秋</option>
                <option value="winter">冬</option>
            </select>
        </form>
        <p v-if="season==='spring'">春ですね</p>
        <p v-else-if="season==='summer'">夏ですね</p>
        <p v-else-if="season==='autumn'">秋ですね</p>
        <p v-else-if="season==='winter'">冬ですね</p>
        <p v-else>何も選択されていません</p>
        <strong>v-show</strong><br/>
        <label for="v_show">表示・非表示</label>
        <input type="checkbox" id="v_show" v-model="toggle_show"/>
        <p v-show="toggle_show">
            指定された条件式がtrueの時にだけdisplay:none が解除されます
        </p>
        <strong>v-for</strong>
        <table>
            <tr>
                <th>ID</th>
                <th>ISBN</th>
                <th>書名</th>
                <th>価格</th>
            </tr>
            <tr v-for="(book,index) in books" :key="book">
                <td>{{index+1}}</td>
                <td>{{book.isbn}}</td>
                <td>{{book.title}}</td>
                <td>{{book.price}}</td>
            </tr>
        </table>
        <strong>v-for with key</strong>
        <ul v-for="(member,key) in members" :key="member">
            <li>{{key}}：{{member}}</li>
        </ul>
        <strong>v-for number</strong><br/>
        <span v-for="i in 5" :key="i">{{i+","}}</span><br/>
        <strong>v-for filter</strong>
        <table>
            <tr>
                <th>ID</th>
                <th>ISBN</th>
                <th>書名</th>
                <th>価格</th>
            </tr>
            <tr v-for="(book,index) in filterBook" :key="book">
                <td>{{index+1}}</td>
                <td>{{book.isbn}}</td>
                <td>{{book.title}}</td>
                <td>{{book.price}}</td>
            </tr>
        </table>
        <strong>v-for change</strong><br/>
        <input type="button" value="変更" @click="changeArray"/>
        <ul>
            <li v-for="item in list" :key="item">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Lpart5",
        data() {
            return {
                toggle: true,
                season: '',
                toggle_show: true,
                books: [
                    {
                        isbn: 'dsdsfdsfdsfsfds',
                        title: 'title1',
                        price: 3600,
                    },
                    {
                        isbn: 'dsdsfdsfdsfsfds',
                        title: 'title2',
                        price: 4600,
                    },
                    {
                        isbn: 'dsdsfdsfdsfsfds',
                        title: 'title3',
                        price: 5600,
                    }
                ],
                members: {
                    name: '山田',
                    age: 12,
                    mail: 'examplesasa@assff.com'
                },
                list: ["aaaaa", "bbbbb", "ccccc"],


            }
        },
        computed: {
            //価格が5000未満の書籍だけを表示
            filterBook: function () {
                return this.books.filter(function (book) {
                    return book.price < 5000;
                })
            }
        },
        methods:{
            changeArray:function () {
                // this.list[1]="ddddd";
                //これじゃないと反映されない
                this.list.splice(1,1,"ddddd");
            }
        }
    }
</script>

<style scoped>

</style>