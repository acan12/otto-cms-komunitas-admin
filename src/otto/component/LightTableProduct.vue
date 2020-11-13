<template>
    <b-card no-body>
        <b-card-header class="border-0">
            <h3 class="mb-0">{{tableTitle}}</h3>
        </b-card-header>

        <el-table class="table-responsive table"
                  header-row-class-name="thead-light"
                  :data="product">
            

            <el-table-column label="Produk ID"
                             prop="id"
                             min-width="140px">
            </el-table-column>

            <el-table-column label="Nama"
                             prop="name"
                             min-width="200px">
            </el-table-column>

            <el-table-column label="Deskripsi"
                             prop="description"
                             min-width="250px">
            </el-table-column>

            <el-table-column label="Kategori"
                             prop="category"
                             min-width="150px">
            </el-table-column>

            <el-table-column label="Harga"
                             prop="price"
                             min-width="180px">
            </el-table-column>

            <el-table-column label="Penjual"
                             min-width="170px"
                             prop="seller">
                
            </el-table-column>

            <el-table-column label="Action"
                             prop="id"
                             min-width="250px">

                <template v-slot="{row}">
                    <b-button href="javascript:;" variant="outline-primary" @click="productDetail(row.id)"> Detail</b-button>
                    <b-button href="javascript:;" variant="danger" @click="postRemove(row.id)"> Delete</b-button>
                </template>
            </el-table-column>
        </el-table>

        <b-card-footer class="py-4 d-flex justify-content-end">
            <base-pagination v-model="currentPage" :per-page="10" :total="50"></base-pagination>
        </b-card-footer>
    </b-card>
</template>
<script>

  import { Table, TableColumn} from 'element-ui'

  import { mapState, mapGetters } from 'vuex'
  export default {
    name: 'light-table-product',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    computed: {
        ...mapGetters('product', ['PRODUCT']),
        ...mapState('product', ['product'])
    },
    props: {
        tableTitle: String
    },
    data() {
      return {
        currentPage: 1
      };
    },
    methods: {
        productDetail: function(){
            this.$router.push({ name: "product_detail"})
        }
    },
    mounted() {
        this.$store.dispatch('product/GET_PRODUCT')
    }
  }
</script>
