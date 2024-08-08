import axios from '@/plugins/axios'
import { ref, onMounted } from 'vue'
import { Information } from '@/types/laravel-model/information'

export const useInformations = () => {
  const informations = ref<Information[]>([])
  const getInformations = async () => {
    const response = await axios.get('/api/informations')
    return response.data
  }
  const setInformations = async () => {
    informations.value = await getInformations()
  }
  onMounted(() =>
    setInformations()
  )
  return { informations, getInformations, setInformations }
}
