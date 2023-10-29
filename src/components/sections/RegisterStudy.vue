<template>
    <section id="signup">
        <div class="relative pt-24 pb-40 md: bg-[#D9D9D9]">
            <div class="mb-9 text-center ">
                <img class="mx-auto" src="/images/signup/signup.png" loading="lazy" alt="đăng ký">
                <h2 class="w-80 md:w-full mx-auto text-32 leading-9 md:text-68 md:leading-normal text-dark text-center font-bold -traccking-[1px]">Đăng kí nhận tư vấn cụ thể</h2>
                <p class="text-base font-normal max-w-[400px] md:w-[800px] mx-auto">Bạn muốn đi du học nhưng chưa biết phải chuẩn bị như thế nào? Bạn cần tư vấn 1:1 từ chọn trường cho đến khi quá trình du học kết thúc? Vậy, hãy liên lạc ngay với chúng tôi!</p>
            </div>
            <div class="px-16 max-w-[564px] mx-auto">
                <form action="">
                    <div class="group-field">
                        <label class="flex" for="#name"><StarIcon class="mr-1"/> Họ & tên</label>
                        <input id="name" name="name" type="text" placeholder="Nhập họ và tên của bạn"/>
                    </div>
                    <div class="group-field">
                        <label class="flex" for="#dob"><StarIcon class="mr-1"/> Ngày sinh</label>
                        <input id="dob" name="dob" type="date" value="dd-mm-yyyy" placeholder="00/00/0000"/>
                    </div>
                    <div class="flex justify-between">
                         <div class="group-field w-28">
                            <label class="flex" for="#sex"><StarIcon class="mr-1"/>Giới tính</label>
                        
                            <div class="relative">
                                <select title="click để chọn giới tính" name="sex" id="sex">
                                    <option value="1">Nam</option>
                                    <option value="0">Nữ</option>
                                </select>
                                <DropdownIcon class="absolute w-5 text-base right-4 top-1/2 -translate-y-1/2"/>
                            </div>
                        </div>
                        <div class="group-field flex-1 ml-4">
                            <label class="flex" for="#phone"><StarIcon class="mr-1"/>Số điện thoại</label>
                            <input id="phone" name="phone" type="text"/>
                        </div>
                    </div>
                    <div class="group-field">
                        <label class="flex" for="#email"><StarIcon class="mr-1"/>Email</label>
                        <input id="email" name="email" type="email" placeholder="youremail@domain.com"/>
                    </div>
                    <div class="group-field">
                        <label class="flex" for="#addressnow"><StarIcon class="mr-1"/>Nơi thường trú</label>
                        <div class="flex items-center relative">
                             <input id="addressnow" type="text" name="addressnow" class="w-full" />
                             <!-- <InfoPopup heading="Hello" content="Hãy nhập địa chỉ bạn đang sinh sống và học tập" /> -->
                        </div>
                        <!-- <div class="dropdown inline-block relative">
                            <input id="addressnow" type="text" name="addressnow" class="w-full" />
                            <ul class="dropdown-content absolute hidden text-gray-700 pt-1">
                                <li  class="block"><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-full" href="#">Option 1</a></li>
                            </ul>
                        </div> -->
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
</style>
<script setup>
    import StarIcon from '@/components/icons/StarIcon.vue';
    import DropdownIcon from '@/components/icons/DropdownIcon.vue';
    import InfoPopup from '@/components/InfoPopup.vue';
    
</script>