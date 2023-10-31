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
            <div class="px-8 xs:px-16 max-w-[600px] mx-auto">
                <form @submit="handleSubmit">
                    <div class="group-field">
                        <label class="flex" for="#name">
                            <StarIcon class="mr-1" /> Họ & tên
                        </label>
                        <input v-model="formData.name" id="name" name="name" required placeholder="Nhập Họ & Tên" type="text" />
                    </div>
                    <div class="group-field">
                        <label class="flex" for="#dob">
                            <StarIcon class="mr-1" /> Ngày sinh
                        </label>
                        <input v-model="formData.dob" id="dob" name="dob" type="date" required placeholder="00/00/0000" />
                    </div>
                    <div class="flex justify-between">
                        <div class="group-field w-28">
                            <label class="flex" for="#sex">
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
                        <div class="group-field flex-1 ml-4 w-7/12">
                            <label class="flex" for="#phone">
                                <StarIcon class="mr-1" />Số điện thoại
                            </label>
                            <input v-model="formData.phone" id="phone" name="phone" required placeholder="Nhập số điện thoại"
                                type="text" />
                        </div>
                    </div>
                    <div class="group-field">
                        <label class="flex" for="#email">
                            <StarIcon class="mr-1" />Email
                        </label>
                        <input v-model="formData.email" id="email" name="email" required type="email"
                            placeholder="youremail@domain.com" />
                    </div>
                    <div class="group-field">
                        <label class="flex" for="dropdown">
                            <StarIcon class="mr-1" />Nơi thường trú
                        </label>
                        <div class="flex gap-2">
                            <div class="relative w-1/3">
                                <select id="residence-city" required v-model="selectedResidenceCity"
                                    @change="updateResidenceDistricts">
                                    <option value="" class="text-grey">Tỉnh/Thành phố</option>
                                    <option v-for="city in sortedResidenceCities" :value="city">{{ city.Name }}</option>
                                </select>
                                <DropdownIcon class="absolute w-4 text-base right-4 top-1/2 -translate-y-1/2" />
                            </div>
                            <div class="relative w-1/3">
                                <select id="residence-district" required v-model="selectedResidenceDistrict"
                                    @change="updateResidenceWards">
                                    <option value="" class="text-grey">Quận/Huyện</option>
                                    <option v-for="district in sortedResidenceDistricts" :value="district">{{ district.Name
                                    }}</option>
                                </select>
                                <DropdownIcon class="absolute w-4 text-base right-4 top-1/2 -translate-y-1/2" />
                            </div>
                            <div class="relative w-1/3">
                                <select id="residence-ward" required v-model="selectedResidenceWard">
                                    <option value="" class="text-grey">Xã/Phường</option>
                                    <option v-for="ward in sortedResidenceWards" :value="ward">{{ ward.Name }}</option>
                                </select>
                                <DropdownIcon class="absolute w-4 text-base right-4 top-1/2 -translate-y-1/2" />
                            </div>
                        </div>
                    </div>
                    <div class="group-field">
                        <label class="flex" for="dropdown">
                            <StarIcon class="mr-1" />Quê quán
                        </label>
                        <div class="flex gap-2">
                            <div class="relative w-1/3">
                                <select id="hometown-city" required v-model="selectedHometownCity" @change="updateHometownDistricts">
                                    <option value="" class="text-grey">Tỉnh/Thành phố</option>
                                    <option v-for="city in sortedHometownCities" :value="city">{{ city.Name }}</option>
                                </select>
                                <DropdownIcon class="absolute w-4 text-base right-4 top-1/2 -translate-y-1/2" />
                            </div>
                            <div class="relative w-1/3">
                                <select id="hometown-district" required v-model="selectedHometownDistrict"
                                    @change="updateHometownWards">
                                    <option value="" class="text-grey">Quận/Huyện</option>
                                    <option v-for="district in sortedHometownDistricts" :value="district">{{ district.Name
                                    }}</option>
                                </select>
                                <DropdownIcon class="absolute w-4 text-base right-4 top-1/2 -translate-y-1/2" />
                            </div>
                            <div class="relative w-1/3">
                                <select id="hometown-ward" required v-model="selectedHometownWard">
                                    <option value="" class="text-grey">Xã/Phường</option>
                                    <option v-for="ward in sortedHometownWards" :value="ward">{{ ward.Name }}</option>
                                </select>
                                <DropdownIcon class="absolute w-4 text-base right-4 top-1/2 -translate-y-1/2" />
                            </div>
                        </div>
                    </div>
                    <div class="group-field">
                        <label for="dropdown">Bằng cấp hiện tại</label>
                        <div class="flex items-center relative">
                            <select v-model="selectedDegree" id="dropdown">
                                <option v-for="degree in degreeOptions" :key="degree" :value="degree">{{ degree }}</option>>
                            </select>
                            <DropdownIcon class="absolute w-4 text-base right-4 top-1/2 -translate-y-1/2" />
                            <InfoPopup heading="Thông tin" content="- Hãy lựa chọn chương trình học bạn đã tốt nghiệp" />
                        </div>
                    </div>
                    <div v-if="selectedDegree === 'Tốt nghiệp THPT'" class="group-field">
                        <label class="flex" for="#">Điểm TB 3 năm</label>
                        <div class="flex items-center relative">
                            <input v-model="formData.averageScoreC3" id="degree" type="text" name="averageScore"
                                placeholder="Nhập điểm trung bình" class="w-full" />
                        </div>
                    </div>
                    <div v-if="selectedDegree === 'Tốt nghiệp Đại học' || selectedDegree === 'Tốt nghiệp Trung cấp/ Cao đẳng'"
                        class="group-field">
                        <label class="flex" for="#GPA">GPA</label>
                        <div class="flex items-center relative">
                            <input v-model="formData.scoreGPA" id="GPA" type="text" name="GPA" placeholder="Nhập điểm GPA"
                                class="w-full" />
                        </div>
                    </div>
                    <div class="group-field">
                        <label class="flex" for="#">Trường du học mong muốn</label>
                        <div class="flex items-center relative">
                            <input v-model="formData.universityWant" id="degree" type="text" name="averageScore"
                                class="w-full" />
                        </div>
                    </div>
                    <div class="group-field">
                        <label class="flex" for="#thoigianduhoc">Thời gian dự định đi du học</label>
                        <input v-model="formData.timeStudyAbort" id="thoigianduhoc" name="thoigianduhoc" type="date" />
                    </div>
                    <div class="group-field">
                        <label class="flex" for="#thoigianduhoc">Câu hỏi về du học</label>
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
    /* Cho phép thanh cuộn khi cần thiết */
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

</script>
<script>
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default {
    data() {
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
                Residence: "",
                Hometown: "",
                degree: "",
                averageScoreC3: "",
                scoreGPA: "",
                universityWant: "",
                timeStudyAbort: "",
                question: "",
            },
        }
    },
    created() {
        const temporaryFormData = cookies.get('temporaryFormData');
        // const ResidenceCookies = temporaryFormData.Residence.split("/")
        // const HometownCookies = temporaryFormData.Hometown.split("/")

        // console.log(ResidenceCookies);

        if (temporaryFormData) {
            this.formData = temporaryFormData
            // this.selectedResidenceWard = ResidenceCookies[0]
            // this.selectedResidenceDistrict = ResidenceCookies[1]
            // this.selectedResidenceCity = ResidenceCookies[2]

            // this.selectedHometownCity = HometownCookies[0]
            // this.selectedHometownDistrict = HometownCookies[1]
            // this.selectedHometownWard = HometownCookies[2]
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
            // this.formData.Residence = { 
            //     Ids: [this.selectedResidenceWard.Id, this.selectedResidenceDistrict.Id, this.selectedResidenceCity.Id ], 
            //     Names: [this.selectedResidenceWard.Name, this.selectedResidenceDistrict.Name, this.selectedResidenceCity.Name] 
            // }
            // this.formData.Residence = { 
            //     Ids: [this.selectedHometownWard.Id, this.selectedHometownDistrict.Id, this.selectedHometownCity.Id ], 
            //     Names: [this.selectedHometownWard.Name, this.selectedHometownDistrict.Name, this.selectedHometownCity.Name] 
            // }
            
            if (this.formData) {
                cookies.set('temporaryFormData', this.formData);
            }
        },

    }
}
</script>