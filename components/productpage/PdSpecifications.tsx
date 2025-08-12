import React from 'react'

interface DescriptionItem {
  id: number,
  title: string,
  description: string
}


const PdSpecifications = () => {

  const PD_DESCRIPTION: DescriptionItem[] = [
    {
      id: 1,
      title: 'تراشه',
      description: 'مجهز به تراشه H2 برای کیفیت صدای بهتر و پردازش هوشمند.'
    },
    {
      id: 2,
      title: 'حذف نویز فعال',
      description: 'دو برابر عملکرد بهتر در حذف نویز نسبت به نسل قبلی.'
    },
    {
      id: 3,
      title: 'حالت شفافیت تطبیقی',
      description: 'کاهش صدای محیطی بلند، مانند آژیر و صدای ساخت و ساز.'
    },
    {
      id: 4,
      title: 'صدای فراگیر شخصی‌سازی‌شده',
      description: 'تجربه‌ای سه‌بعدی و فراگیر با ردیابی پویای سر.'
    },
    {
      id: 5,
      title: 'شارژدهی باتری',
      description: 'تا ۶ ساعت گوش دادن با یک بار شارژ و تا ۳۰ ساعت با کیس شارژ.'
    },
    {
      id: 6,
      title: 'کنترل لمسی',
      description: 'امکان تنظیم صدا با کشیدن انگشت به بالا یا پایین روی ساقه ایرپاد.'
    },
    {
      id: 7,
      title: 'میکروفون‌ها',
      description: 'میکروفون‌های beamforming دوگانه برای مکالمه‌های شفاف.'
    },
    {
      id: 8,
      title: 'مقاومت در برابر آب',
      description: 'ایرپادز و کیس شارژ هر دو دارای استاندارد IPX4 برای مقاومت در برابر تعریق و آب هستند.'
    },
    {
      id: 9,
      title: 'اتصال',
      description: 'بلوتوث نسخه 5.3 برای اتصال پایدار و سریع.'
    },
    {
      id: 10,
      title: 'سنسورها',
      description: 'شامل سنسورهای تشخیص پوست، شتاب‌سنج و ژیروسکوپ.'
    },
    {
      id: 11,
      title: 'کیس شارژ',
      description: 'کیس شارژ MagSafe با قابلیت Find My و بلندگوی داخلی.'
    },
    {
      id: 12,
      title: 'دستیار صوتی',
      description: 'دسترسی سریع به سیری با گفتن "Hey Siri".'
    },
    {
      id: 13,
      title: 'طراحی',
      description: 'سبک‌وزن و ارگونومیک با سری‌های سیلیکونی در چهار اندازه.'
    },
    {
      id: 14,
      title: 'سوئیچ خودکار',
      description: 'تغییر خودکار بین دستگاه‌های اپل متصل به یک Apple ID.'
    },
    {
      id: 15,
      title: 'سازگاری',
      description: 'سازگار با آیفون، آیپد، مک، اپل واچ و اپل تی‌وی.'
    }
  ];
  return (
    <div className="overflow-x-auto m-15 pt-5 border-t-2 border-[rgba(155,164,180,0.3)]">
      <h3 className='text-sm md:text-[16px] font-semibold mb-5 border-b-2 border-[#14274E] w-fit pb-3'>
        مشخصات
      </h3>
      <table className="w-full md:w-2xl lg:w-5xl divide-y-2 divide-gray-200">
        <tbody className="divide-y divide-gray-200">

          {PD_DESCRIPTION.map(item =>
            <tr key={item.id} className="text-sm lg:text-[15px] font-medium">
              <td className="px-3 py-5 text-[#394867] font-semibold">{item.title}</td>
              <td className="px-3 py-5 ">{item.description}</td>
            </tr>
          )}
          

          
        </tbody>
      </table>
    </div>
  )
}

export default PdSpecifications
