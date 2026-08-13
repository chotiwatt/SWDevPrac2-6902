"use strict";

const bookingForm = document.querySelector("form");
const dateInput = bookingForm.elements.date;

function getTodayString() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

dateInput.min = getTodayString();

bookingForm.addEventListener("submit", function (event) {
  const fullname = bookingForm.elements.fullname.value.trim();
  const phone = bookingForm.elements.phone.value.trim();
  const emailInput = bookingForm.elements.email;
  const email = emailInput.value.trim();
  const ageValue = bookingForm.elements.age.value.trim();
  const age = Number(ageValue);
  const selectedClass = bookingForm.elements.class.value;
  const selectedDate = dateInput.value;
  const selectedTime = bookingForm.elements.time.value;
  const experience = bookingForm.querySelector(
    'input[name="experience"]:checked'
  );
  const confirmed = bookingForm.elements.confirm.checked;

  if (!fullname || !phone) {
    event.preventDefault();
    alert("กรุณากรอกชื่อ-นามสกุล และหมายเลขโทรศัพท์");
    return;
  }

  if (!email || !emailInput.checkValidity()) {
    event.preventDefault();
    alert("กรุณากรอก Email ให้ถูกต้อง");
    return;
  }

  if (!ageValue || !Number.isInteger(age) || age < 15 || age > 100) {
    event.preventDefault();
    alert("กรุณากรอกอายุระหว่าง 15 ถึง 100 ปี");
    return;
  }

  if (!selectedClass ) {
    event.preventDefault();
    alert(
      "กรุณาเลือกคลาสออกกำลังกาย "
    );
    return;
  }

  if ( !selectedDate ) {
    event.preventDefault();
    alert(
      "กรุณาเลือกวันที่เข้าเรียน "
    );
    return;
  }
  
  if ( !selectedTime ) {
    event.preventDefault();
    alert(
      "กรุณาเลือกช่วงเวลา"
    );
    return;
  }

  if (!experience) {
    event.preventDefault();
    alert(
      "กรุณาเลือกระดับประสบการณ์"
    );
    return;
  }



  if (selectedDate < getTodayString()) {
    event.preventDefault();
    alert("กรุณาเลือกวันที่ปัจจุบันหรือวันที่ในอนาคต");
    return;
  }

  if (!confirmed) {
    event.preventDefault();
    alert(
      "กรุณายืนยันข้อมูลและรับทราบว่าการส่งแบบฟอร์มยังไม่ถือเป็นการยืนยันสิทธิ์เข้าเรียน"
    );
  }
});
