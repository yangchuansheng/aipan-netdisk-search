<script setup>

const router = useRouter()
const donate = () => {
    router.push({ path: '/donate' })
}

</script>
<template>
    <div class="py-2 h-25 fixed bottom-0 left-0 right-0 bg-white/70  backdrop-blur dark:bg-slate-800 space-y-1">
        <div class="flex flex-row items-center justify-center  gap-3">
            <el-button link color="#ffffff" @click="donate()">
                <img class="w-5 h-5" src="@/assets/donation/dashang.svg" alt="打赏">
            </el-button>
        </div>
        <p class="text-center text-[9px] sm:text-[13px] text-slate-400">
          <a class="" href="https://pan.quark.cn/s/1e46850d3f3d" target="_blank">
            <span class="text-center text-[9px] sm:text-[13px] text-slate-400" style="color: rgba(147, 197, 253,1); margin-bottom: 0.7em;">
              看动画学英语
            </span>
          </a>
           | 
          <a class="" href="https://pan.quark.cn/s/481f47b67770" target="_blank">
            <span class="text-center text-[9px] sm:text-[13px] text-slate-400" style="color: rgba(147, 197, 253,1); margin-bottom: 0.7em;">
              看科普学英语
            </span>
          </a>
        </p>
        <p class="text-center text-[8px] sm:text-[12px] text-slate-400">
          以上内容由网络爬虫自动抓取，以非人工方式自动生成。
        </p>
        <p class="text-center text-[8px] sm:text-[12px] text-slate-400">
            声明：本站内容皆来自网络公开资源。本站不储存、复制、传播任何文件，不做任何盈利，仅作个人公益学习，请勿非法&商业传播，如有侵权，请及时
            <a class="text-blue-500 underline" href="mailto:contact@smartaitools.run" title="点击留言"> 留言 </a> 告知删除。
        </p>
    </div>
</template>
<style scoped></style>