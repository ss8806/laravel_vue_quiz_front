import axios from '@/plugins/axios'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { Category } from '@/types/laravel-model/category'

export const useCategories = () => {
  const categories = ref<Category[]>([])
  const getCategories = async () => {
    const response = await axios.get('/api/categories')
    return response.data
  }

  const setCategories = async () => {
    categories.value = await getCategories()
  }

  const checkbox = ref<number[]>([])

  const checkAll = () => {
    const val: number[] = []
    categories.value.forEach((element: Category) => {
      val.push(element.id)
    })
    checkbox.value = val
  }

  const checkAllOff = () => {
    checkbox.value = []
  }

  const router = useRouter()
  const goQuiz = () => {
    router.push(`/quiz?categories=${checkbox.value}`)
  }
  onMounted(() => {
    setCategories()
  })
  return { categories, getCategories, setCategories, checkbox, checkAll, checkAllOff, goQuiz }
}
