import Vue from "vue";
import { createOrder } from '@/api/user/package'
import i18n from '@/lang'
import { getID } from '@/utils/auth'
import router from '@/router/index'

export function recharge(currency) {
    Vue.prototype.$messageBox.prompt(i18n.t('myInfo.rechargeTip'), i18n.t('myInfo.recharge'), {
        confirmButtonText: i18n.t('common.ok'),
        cancelButtonText: i18n.t('common.cancel'),
        inputPattern: /^[1-9][0-9]*0$/,
        dangerouslyUseHTMLString: true
    }).then(({ value }) => {
        const price = Number(value)
        const isCNY = currency === 'CNY'
        const subject = isCNY ? '充值人民幣' : 'Recharge USD'
        const data = {
            price,
            currency,
            goods: [{
                subject,
                amount: 1,
                price,
            }],
            goods_type: isCNY ? 'recharge_cny' : 'recharge_usd',
        }
        createOrder(getID(), data)
            .then(res => {
                router.push({
                    name: 'OrderDetail',
                    query: {
                        currency: currency,
                        orderID: res.data.order_id,
                        totalPrice: price,
                        buyData: JSON.stringify(data.goods)
                    }
                })
            })
            .catch(err => {
                console.log(err)
            })
    })
}

export function showRechargeTip(currency) {
    Vue.prototype.$messageBox.confirm(i18n.t('package.rechargeTip'), 'Tip', {
        confirmButtonText: i18n.t('myInfo.recharge'),
        cancelButtonText: i18n.t('common.cancel')
    })
        .then(() => {
            recharge(currency)
        })
        .catch(() => {})
}
