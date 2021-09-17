<template>
    <div>
        <el-alert
                :title="$t('domainTable.title')"
                description="仅为中国大陆工商认证并且使用人民币在线支付的企业开具发票，开票金额需至少1000元且为整数，消费不足1000元可后续累积足够金额再一次性开具发票。"
                type="info"
                show-icon>
        </el-alert>
        <div style="width: 400px; margin: 100px auto;">
            <div slot="title">
                <p>输入开票信息</p>
                <!--<p style="font-size: 12px">{{ $t('app.createTip') }}</p>-->
            </div>
            <el-form :model="form" label-position="left" label-width="120px" ref="createForm">
                <el-form-item prop="header" label="发票抬头" label-width="100px" required>
                    <el-input v-model="form.header" placeholder="企业工商认证名称"></el-input>
                </el-form-item>

                <el-form-item prop="identification" label="纳税人识别号" label-width="120px" required>
                    <el-input v-model="form.identification"></el-input>
                </el-form-item>

                <el-form-item prop="address" label="收件信息" label-width="100px" required>
                    <el-input v-model="form.address" placeholder="收件地址 联系人" type="textarea" autosize :rows="3"></el-input>
                </el-form-item>

                <el-form-item prop="invoice_issued" label="已开金额" label-width="100px">
                    <el-input readonly v-model="form.invoice_issued"></el-input>
                </el-form-item>

                <el-form-item prop="available_amount" label="可开金额" label-width="100px">
                    <el-input readonly v-model="form.available_amount"></el-input>
                </el-form-item>

                <el-form-item prop="await_amount" label="开票金额" label-width="100px" required>
                    <el-input type="number" v-model="form.await_amount" placeholder="至少1000元"></el-input>
                </el-form-item>

            </el-form>
            <div slot="footer" style="margin-top: 10px">
                <el-button type="primary" @click="handleSubmit" :loading="loading" >{{ form.await_amount>0?"重新提交":"提交" }}</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import { getInvoiceInfo, createInvoice } from '@/api/user/package'
    import { getID } from '@/utils/auth'
    export default {
        name: "Invoice",
        data() {
            return {
                loading: false,
                form: {
                    header: '',
                    identification: '',
                    address: '',
                    available_amount : 0,
                    await_amount: 0,
                    invoice_issued: 0,
                },
            };
        },
        mounted() {
            this.fetchInvoiceInfo()
        },
        methods: {
            fetchInvoiceInfo() {
                getInvoiceInfo(getID())
                    .then(info => {
                        // info = info.data
                        this.form = info.data
                    })
            },
            handleSubmit() {
                const amount = Number(this.form.await_amount)
                const available_amount = Number(this.form.available_amount)
                if ((amount > 0 && amount < 1000) || amount > available_amount || amount < 0) {
                    this.$notify.error({
                        title: this.$t('common.error'),
                        message: '输入金额有误',
                    });
                    return
                }
                this.loading = true
                this.$messageBox.confirm("确认提交吗？", {
                    distinguishCancelAndClose: true,
                    confirmButtonText: this.$t('common.ok'),
                    cancelButtonText: this.$t('common.cancel')
                })
                    .then(() => {
                        this.form.await_amount = Number(this.form.await_amount)
                        createInvoice(getID(), this.form).then(() => {
                            this.loading = false
                            this.$notify({
                                title: this.$t('common.success'),
                                message: '提交成功',
                                type: 'success'
                            });
                        }).catch(() => {
                            this.loading = false
                        })

                    })
                    .catch(() => {
                        this.loading = false
                    })
            }
        }
    }
</script>

<style scoped>

</style>
