<template>
    <section id="signup">
        <div class="relative pt-24 pb-40 md: bg-[#D9D9D9]">
            <div  v-motion-slide-visible-once-bottom class="mb-9 md:mb-12 text-center ">
                <img class="mx-auto" src="/images/signup/signup.png" loading="lazy" alt="đăng ký">
                <h2
                    class="w-80 my-4 md:w-full mx-auto text-32 leading-9 md:text-68 md:leading-normal text-dark text-center font-bold -traccking-[1px]">
                    Đăng kí nhận tư vấn cụ thể</h2>
                <p class="text-base px-4 mt-3 font-normal max-w-[400px] md:max-w-[800px] mx-auto">Bạn muốn đi du học nhưng
                    chưa biết phải chuẩn bị như thế nào? Bạn cần tư vấn 1:1 từ chọn trường cho đến khi quá trình du học kết
                    thúc? Vậy, hãy liên lạc ngay với chúng tôi!</p>
            </div>
            <div class="px-10 xs:px-16 max-w-[600px] mx-auto">
                <Form action="/"  @submit="handleSubmit" :validation-schema="schema" novalidate="novalidate">
                    <div class="group-field">
                        <label class="flex" for="name">
                            <StarIcon class="mr-1" /> Họ & tên
                        </label>
                        <Field v-model="formData.name" id="name" name="name" placeholder="Nhập Họ & Tên" type="text" required/>
                        <ErrorMessage class="mt-4 text-sm text-[#ff0000]" name="name" />
                    </div>
                    <div class="group-field">
                        <label class="flex" for="dob">
                            <StarIcon class="mr-1" /> Ngày sinh
                        </label>
                        <Field class="w-full" v-model="formData.dob" id="dob" name="dob" type="date" required placeholder="00/00/0000" />
                        <ErrorMessage class="mt-4 text-sm text-[#ff0000]" name="dob" />
                    </div>
                    <div class="relative mb-6">
                        <div class="flex justify-between">
                            <div class=" w-28">
                                <label class="flex" for="sex">
                                    <StarIcon class="mr-1" />Giới tính
                                </label>

                                <div class="relative">
                                    <select v-model="formData.sex" title="click để chọn giới tính" required name="sex" id="sex">
                                        <option selected value="1">Nam</option>
                                        <option value="0">Nữ</option>
                                    </select>
                                    <DropdownIcon class="absolute w-4 text-base right-4 top-1/2 -translate-y-1/2" />
                                </div>
                            </div>
                            <div class="group-field flex-1 ml-4 w-7/12 !mb-0">
                                <label class="flex" for="phone">
                                    <StarIcon class="mr-1" />Số điện thoại
                                </label>
                                <Field v-model="formData.phone" id="phone" name="phone" required placeholder="Nhập số điện thoại"
                                    type="text" />
                            </div>
                        </div>
                        <ErrorMessage class="mt-4 block text-sm text-[#ff0000]" name="phone" />
                    </div>
                    <div class="group-field">
                        <label class="flex" for="email">
                            <StarIcon class="mr-1" />Email
                        </label>
                        <Field v-model="formData.email" id="email" name="email" required type="email"
                            placeholder="youremail@domain.com" />
                        <ErrorMessage name="email" class="mt-4 block text-sm text-[#ff0000]" />
                    </div>
                    <div class="group-field">
                        <label class="flex" for="dropdown">
                            <StarIcon class="mr-1" />Nơi thường trú
                        </label>
                        <div class="flex gap-2">
                            <div class="relative w-1/3">
                                <Field as="select" id="residence-city" required name="selectedResidenceCity" v-model="selectedResidenceCity"
                                    @change="updateResidenceDistricts">
                                    <option value="" disabled class="text-grey">Tỉnh/Thành phố</option>
                                    <option v-for="city in sortedResidenceCities" :value="{Id: city.Id, Name: city.Name }">{{ city.Name }}</option>
                                </Field>
                                <DropdownIcon class="absolute w-4 text-base right-4 top-1/2 -translate-y-1/2" />
                            </div>
                            <div class="relative w-1/3">
                                <Field as="select" id="residence-district" required name="selectedResidenceDistrict" v-model="selectedResidenceDistrict"
                                    @change="updateResidenceWards">
                                    <option value="" disabled  class="text-grey">Quận/Huyện</option>
                                    <option v-for="district in sortedResidenceDistricts" :value="{Id: district.Id, Name: district.Name }">{{ district.Name
                                    }}</option>
                                </Field>
                                <DropdownIcon class="absolute w-4 text-base right-4 top-1/2 -translate-y-1/2" />
                            </div>
                            <div class="relative w-1/3">
                                <Field as="select" id="residence-ward" name="selectedResidenceWard" v-model="selectedResidenceWard">
                                    <option value="" disabled  class="text-grey">Xã/Phường</option>
                                    <option v-for="ward in sortedResidenceWards" :value="{Id: ward.Id, Name: ward.Name }">{{ ward.Name }}</option>
                                </Field>
                                <DropdownIcon class="absolute w-4 text-base right-4 top-1/2 -translate-y-1/2" />
                            </div>
                        </div>
                        <ErrorMessage class="mt-4 text-sm text-[#ff0000]" name="selectedResidenceWard" />
                    </div>
                    <div class="group-field">
                        <label class="flex" for="dropdown">
                            <StarIcon class="mr-1" />Quê quán
                        </label>
                        <div class="flex gap-2">
                            <div class="relative w-1/3">
                                <Field as="select" id="hometown-city" required name="selectedHometownCity" v-model="selectedHometownCity" @change="updateHometownDistricts">
                                    <option value="" disabled  class="text-grey">Tỉnh/Thành phố</option>
                                    <option v-for="city in sortedHometownCities" :value="city">{{ city.Name }}</option>
                                </Field>
                                <DropdownIcon class="absolute w-4 text-base right-4 top-1/2 -translate-y-1/2" />
                            </div>
                            <div class="relative w-1/3">
                                <Field as="select" id="hometown-district" required name="selectedHometownDistrict" v-model="selectedHometownDistrict"
                                    @change="updateHometownWards">
                                    <option value="" disabled  class="text-grey">Quận/Huyện</option>
                                    <option v-for="district in sortedHometownDistricts" :value="district">{{ district.Name
                                    }}</option>
                                </Field>
                                <DropdownIcon class="absolute w-4 text-base right-4 top-1/2 -translate-y-1/2" />
                            </div>
                            <div class="relative w-1/3">
                                <Field as="select" id="hometown-ward" required name="selectedHometownWard" v-model="selectedHometownWard">
                                    <option value="" disabled  class="text-grey">Xã/Phường</option>
                                    <option v-for="ward in sortedHometownWards" :value="ward">{{ ward.Name }}</option>
                                </Field>
                                <DropdownIcon class="absolute w-4 text-base right-4 top-1/2 -translate-y-1/2" />
                            </div>
                        </div>
                        <ErrorMessage class="mt-4 text-sm text-[#ff0000]" name="selectedHometownWard" />
                    </div>
                    <div class="group-field">
                        <label for="dropdown">Bằng cấp hiện tại</label>
                        <div class="flex items-center relative">
                            <Field as="select" v-model="selectedDegree" name="selectedDegree" id="dropdown">
                                <option v-for="degree in degreeOptions" :key="degree" :value="degree">{{ degree }}</option>>
                            </Field>
                            <DropdownIcon class="absolute w-4 text-base right-4 top-1/2 -translate-y-1/2" />
                            <InfoPopup heading="Thông tin" content="Hãy lựa chọn chương trình học bạn đã tốt nghiệp" />
                        </div>
                    </div>
                    <div v-if="selectedDegree === 'Tốt nghiệp THPT'" class="group-field">
                        <label class="flex" for="">Điểm TB 3 năm</label>
                        <div class="flex items-center relative">
                            <Field v-model="formData.averageScoreC3" id="degree" type="text" name="averageScore"
                                placeholder="Nhập điểm trung bình" class="w-full" />
                        </div>
                    </div>
                    <div v-if="selectedDegree === 'Tốt nghiệp Đại học' || selectedDegree === 'Tốt nghiệp Trung cấp/ Cao đẳng'"
                        class="group-field">
                        <label class="flex" for="GPA">GPA</label>
                        <div class="flex items-center relative">
                            <Field v-model="formData.scoreGPA" id="GPA" type="text" name="GPA" placeholder="Nhập điểm GPA"
                                class="w-full" />
                        </div>
                    </div>
                    <div class="group-field">
                        <label class="flex" for="">Trường du học mong muốn</label>
                        <div class="flex items-center relative">
                            <Field v-model="formData.universityWant" id="degree" type="text" name="averageScore"
                                class="w-full" />
                        </div>
                    </div>
                    <div class="group-field">
                        <label class="flex" for="thoigianduhoc">Thời gian dự định đi du học</label>
                        <Field v-model="formData.timeStudyAbort" class="w-full" id="thoigianduhoc" name="thoigianduhoc" type="date" />
                    </div>
                    <div class="group-field">
                        <label class="flex" for="thoigianduhoc">Câu hỏi về du học</label>
                        <textarea v-model="formData.question" title="để mở rộng bạn có thể kéo góc dưới bên phải của trường"
                            class="relative h-72 py-8" id="thoigianduhoc" name="thoigianduhoc"
                            placeholder="Bạn hãy thoải mái đặt câu hỏi ở đây nhé!" />
                    </div>
                    <div class="group-field">
                        <button type="submit" class="!bg-[#909090]">
                            Lưu tạm thời
                        </button>
                        <button type="submit" class="mt-4">
                            Đăng kí
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
<style scoped>
.dropdown:hover>.dropdown-content {
    display: block;
}

textarea {
    overflow: auto;
}

textarea::placeholder {
    @apply text-base text-[#a0a0a0] font-normal;
}

textarea::-webkit-resizer {
    border-width: 8;
    border-style: solid;
    border-color: transparent #909090 #909090 transparent;
}
</style>
<script setup>
    import dataProvince from '@/data/data.js'
    import StarIcon from '@/components/icons/StarIcon.vue';
    import DropdownIcon from '@/components/icons/DropdownIcon.vue';
    import InfoPopup from '@/components/InfoPopup.vue';
    import {useToast} from 'vue-toast-notification';
    import 'vue-toast-notification/dist/theme-sugar.css';
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import * as yup from 'yup';
    
    const schema = yup.object({
        name: yup.string().required('Hãy nhập Họ & Tên của bạn'),
        dob: yup.string().required('Hãy nhập Ngày sinh của bạn'),
        phone: yup.string().required('Hãy nhập Số điện thoại của bạn'),
        email: yup.string().email('Email chưa đúng định dạng').required('Hãy nhập Email'),
        // selectedResidenceWard: yup.string().required('Hãy nhập đầy đủ nơi thường trú'),
        // selectedHometownWard: yup.string().required('Hãy nhập đầy đủ quê quán'),
    });

</script>
<script>
export default {
    data() {
        const $toast = useToast();
        return {
            cities: dataProvince,
            selectedResidenceCity: '', // Thành phố/tỉnh nơi thường trú
            selectedResidenceDistrict: '', // Quận/Huyện nơi thường trú
            selectedResidenceWard: '', // Phường/Xã nơi thường trú
            selectedHometownCity: '', // Thành phố/tỉnh quê quán
            selectedHometownDistrict: '', // Quận/Huyện quê quán
            selectedHometownWard: '', // Phường/Xã quê quán
            customFieldValue1: '',
            customFieldValue2: '',
            selectedDegree: 'Tốt nghiệp Đại học',
            degreeOptions: ['Tốt nghiệp THPT', 'Tốt nghiệp Trung cấp/ Cao đẳng', 'Tốt nghiệp Đại học'],
            formData: {
                name: "",
                dob: "",
                sex: "1",
                phone: "",
                email: "",
                degree: "",
                averageScoreC3: "",
                scoreGPA: "",
                universityWant: "",
                timeStudyAbort: "",
                question: "",
            },
            $toast
        }
    },
    computed: {
        sortedResidenceCities: function () {
            return this.cities.slice().sort((a, b) => a.Name.localeCompare(b.Name));
        },
        sortedResidenceDistricts: function () {
            if (this.selectedResidenceCity) {
                const selectedCity = this.cities.find(city => city.Id === this.selectedResidenceCity.Id);
                if (selectedCity) {
                    return selectedCity.Districts.slice().sort((a, b) => a.Name.localeCompare(b.Name));
                }
                return [];
            }
        },
        sortedResidenceWards: function () {
            if (this.selectedResidenceDistrict) {
                const selectedCity = this.cities.find(city => city.Id === this.selectedResidenceCity.Id);
                if (selectedCity) {
                    const selectedDistrict = selectedCity.Districts.find(district => district.Id === this.selectedResidenceDistrict.Id);
                    if (selectedDistrict) {
                        return selectedDistrict.Wards.slice().sort((a, b) => a.Name.localeCompare(b.Name));
                    }
                }
                return [];
            }
        },
        sortedHometownCities: function () {
            return this.cities.slice().sort((a, b) => a.Name.localeCompare(b.Name));
        },
        sortedHometownDistricts: function () {
            if (this.selectedHometownCity) {
                const selectedCity = this.cities.find(city => city.Id === this.selectedHometownCity.Id);
                if (selectedCity) {
                    return selectedCity.Districts.slice().sort((a, b) => a.Name.localeCompare(b.Name));
                }
                return [];
            }
        },
        sortedHometownWards: function () {
            if (this.selectedHometownDistrict) {
                const selectedCity = this.cities.find(city => city.Id === this.selectedHometownCity.Id);
                if (selectedCity) {
                    const selectedDistrict = selectedCity.Districts.find(district => district.Id === this.selectedHometownDistrict.Id);
                    if (selectedDistrict) {
                        return selectedDistrict.Wards.slice().sort((a, b) => a.Name.localeCompare(b.Name));
                    }
                }
                return [];
            }
        },
    },
    methods: {
        updateResidenceDistricts: function () {
            this.selectedResidenceDistrict = '';
        },
        updateResidenceWards: function () {
            this.selectedResidenceWard = '';
        },
        updateHometownDistricts: function () {
            this.selectedHometownDistrict = '';
        },
        updateHometownWards: function () {
            this.selectedHometownWard = '';
        },

       async handleSubmit() {
        // reset the form and the field values to their initial values
      
            // if (this.formData) {
            //     this.$toast.success('Lưu tạm thời thành công!', {
            //     position: 'bottom-right'
            // })
            // }
        },

    }
}
</script>