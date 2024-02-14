"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const FAQ = () => {
    return (
        <div id="faq-section" className='mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg'>
            <h3 className='text-xl font-normal text-white text-center mb-6'>S.S.S</h3>
            <h2 className='text-4xl lg:text-6xl font-semibold text-center text-white'>Sıkça Sorulan <br /> Sorular</h2>
            <div className="w-full px-4 pt-16">
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Smart TV’ye hangi programları kurabilirim ?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                     ‼️Her Smart TV’de tüm programlar olmuyor. Smart TV’lerinizin app mağazaları oluyor, oradan önerdiğimiz programları aratabilirsiniz. Beko, Vestel, Grundig ve Philips Smart tv’lerde program azdır.
                                     Program ücretli ve ücretsiz olarak ayrılır, ne kullanacağınız sizin alacağınız verime kalmış. Ücretsizlerden de verim alan var, ücretli kullanıp kafası ağrımayan da var.
                                        <br />

                                        ✅ Ücretli Program Önerileri
                                                <br />
                                        ⭕️Duplexplay (Ücretli 💵) <br />
                                        ⭕️Tivimate (Ücretli 💵) <br />
                                        ⭕️Baytv (Ücretli 💵) <br />
                                        ⭕️Smartone (Ücretli 💵) <br />
                                        ⭕️Quzu (Ücretli - Ücretsiz Reklamlı 2 seçenekli 💵) <br />
                                        ⭕️Smartiptv (Ücretli 💵) <br />
                                            <br />

                                ✅ Ücretsiz Program Önerileri

                                ⭕️XCIPTV (Ücretsiz veya Ücretli) | Yapımcı OTTRUN) <br />
                                ⭕️Smart İptv Xtream Player (Ücretsiz | Yapımcı Devcoder) <br />
                                ⭕️İptv Stream Player (Ücretsiz) <br />
                                ⭕️İptv Smarters Pro (Ücretsiz | Tv programları Türkiye’deki linklere kapalı o yüzden giriş yapmayabilir, giriş yapmazsa benden ekstra domain isteyin ) <br />
                                ⭕️Gse İptv (Ücretsiz) <br />
                                ⭕️OttPlayer (Ücretsiz) <br />
                                ⭕️SSİPTV(Ücretsiz) <br />

                                            <br />
                                ❌SSİPTV PROGRAMI UYARISI ❌  <br />
                                Çoğu Smart TV’de olduğu için çok kullanıcısı vardır, o yüzden her tv’de ayrı sorun verir. Kanallarda error, yayın esnasında karartı, uzaktaki içerik yüklenemedi hatası ya da bazı klasörler görünmez. Lütfen başka program kurunuz, tv’de başka bir program yoksa özellikle derbi ya da önemli maçları laptop+hdmi yaparak izleyiniz ve SSİPTV rahatlasın diye yabancı kanalları sildiriniz.
                                <br />

                                    <br />
                                ‼ 2 adet program kurmanızı öneririz, alternatif olması her zaman iyidir, programlar sorun çıkarabiliyor.
                                <br />
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                        <span>Mibox, Mistick vb. cihazlara veya Android TV’lere hangi programları kurabilirim ?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                ✅ Ücretli Program Önerileri  <br />

                                    ⭕️Duplexplay (Ücretli 💵) <br />
                                    ⭕️Tivimate (Ücretli 💵) <br />
                                    ⭕️Baytv (Ücretli 💵) <br />
                                    ⭕️Smartone (Ücretli 💵) <br />
                                    ⭕️Quzu (Ücretli - Ücretsiz Reklamlı 2 seçenekli 💵) <br />
                                    ⭕️Smartiptv (Ücretli 💵) <br />


                                    ✅ Ücretsiz Program Önerileri <br />

                                    ⭕️XCIPTV (Ücretsiz) | Yapımcı OTTRUN) <br />
                                    ⭕️Smart İptv Xtream Player (Ücretsiz | Yapımcı Devcoder) <br />
                                    ⭕️İptv Stream Player (Ücretsiz) <br />
                                    ⭕️İptv Smarters Pro (Ücretsiz | Tv programları Türkiye’deki linklere kapalı o yüzden giriş yapmayabilir, giriş yapmazsa bizden ekstra domain isteyin.) <br />   

                                            <br />
                                    ‼️ En 2 adet program kurmanızı öneririz, alternatif olması her zaman iyidir, programlar sorun çıkarabiliyor.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                        <span>Android telefonuma hangi programları kurabilirim ?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                ✅ Ücretsiz Program Önerileri <br />
                                        <br />
                                    ⭕️XCIPTV (Yapımcı OTTRUN) <br />
                                    ⭕️Smart İptv Xtream Player (Yapımcı Devcoder) <br />
                                    ⭕️İptv Stream Player <br />
                                    ⭕️İptv Smarters Pro <br />
                                            <br />
                                    ‼️Çakmaları çok bulunmaktadır, lütfen yapımcılara dikkat ediniz. <br />
                                    ‼️ En 2 adet program kurmanızı öneririz, alternatif olması her zaman iyidir, programlar sorun çıkarabiliyor <br />
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                        <span>İos telefonuma, tabletime veya macbook’a hangi programları kurabilirim ?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                ⭕️Cloudstream (Maç için önerimizdir) (Ücretsiz) <br />
                                ⭕️XCIPTV (Maç ve dizi, film için önerimizdir.) <br />
                                ⭕️Gse İptv (Maç için önerimizdir) (Ücretsiz) <br />
                                ⭕️İptv Smarters Lite (Dizi, Film için) (Ücretsiz) <br />
                                ⭕️quzu (Bazılarında ücretsiz reklamlı, ücretli) <br />
                                ⭕️VLC (Macbook, İmac) (Ücretsiz) <br />
                                ⭕️Lilly Player (Dizi film için önerimizdir) (Ücretsiz) <br />
                                ⭕️İplayTV (Ücretli💵) <br />
                                ⭕️IPTVX (Ücretli💵) <br />


                                ‼️ 2 adet program kurmanızı öneririz, alternatif olması her zaman iyidir, programlar sorun çıkarabiliyor.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                        <span>Canlı yayınlarda donma yaşıyorum, nasıl çözebilirim ? Bazı yayınlara wifi ile erişemiyorum, 4g mobil internetle açılıyor. Sebebi nedir ?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                🔴🟣DONMA PROBLEMİ 🟡🟣 <br />
                                ‼️‼️ Donma sorunu birden fazla etkenden olabilir.  <br />
                                ❌ İnternet servis sağlayıcı kısıtlaması <br />
                                ❌ Program kaynaklı sorun <br />
                                ❌ Bölgesel internet kaynaklı sorun ( Haftasonları özellikle akşamları bölgesel hız düşürülen yerler olabiliyor bu da internetinizde gecikme ve ping seviyesini yükseltiyor. )
                                ✅ Öncelikle donma olduğunda alternatif program değiştirip bakmalısınız. Tv’de izliyorsanız eğer ve alternatif bir programınız yok ise cep telefonundan önerilen programlar ile yayını kontrol edebilirsiniz. İlk olarak aynı wifi ile kontrol ediniz. Ekstra programlarda da sorun devam ediyorsa eğer bu sefer mobil operatör 4g internet ( mutlaka iyi sinyal çekmeli hız testi yaptığınızda 4-4.5 g internet 60-70 mbps minimum hız verir) ile yayınları açınız. Telefondaki bir programdan 4g ile direkt kontrol etmeniz daha sağlıklı olacaktır, 4g operatör kısıtlamaya uğraması çok daha düşük bir ihtimaldir. <br />
                                ✅ www.nperf.com sitesinden ilk olarak otomatik sunucu seçiminde test yapın, bu testten sonra sayfayı yenileyin, sunucu seçimi kısmından FRANKFURT 1 GB seçiniz bir de öyle test yapın. Ciddi fark gösterecektir. <br />
                                ✅ Bu testler sonucunda sorun açığa kavuşacaktır. Modem resetlemek, 10-15 dakika kapalı tutmak ve tekrar açtıktan sonra programı tekrar açmak internetinizi kendine getirebilir. Modeminizi arada bir uyurken resetleyebilirsiniz, sabah açınız.  <br />
                                ✅ 1 aylık internet şirketinizden statik ip alabilir deneyebilirsiniz. <br />
                                ✅ İnternet şirketinizden dinamik ip alabilir deneyebilirsiniz. <br />
                                ✅Modeminizin reset düğmesine basılı tutarak modeminizi yeniden kurabilirsiniz.  <br />
                                ✅ İnternet arayüzünüzden DNS’yi değiştirerek düzelten bir üyemiz oldu.  <br />
                                DNS : 208.67.222.222 – 208.67.220.220 veya internetteki farklı dnsler kullanabilirsiniz. <br />
                                ✅ Müşteri temsilcisini arayıp bein connect kullandığınızı, özellikle maç saatlerinde donma yaşadığınızı onun dışında canlı yayınlarda problem olmadığını belirtin. 4gye geçtiğinizde yayının düzeldiğini, wifide bozduğunu belirtiniz. Modeminize yapılandırma göndersinler, tam reset atsınlar o bile düzeltme yapabilecektir. <br />
                                ✅ Bunlar dışında düzelme olmadıysa kısıtlama sürekli olmayan bir şeydir piyango gibi düşünün, siz diğer haftaya kadar modeminizi düzenli kapatıp açın, arada reset çekin kendiliğinden bile kısıtlamadan çıkabilirsiniz. <br />

                                🔴🟣 YAYINLARIN BAZILARINA ULAŞILAMAMA SORUNU 🟢🔵<br />
                                Bazı üyelerden beinlere erişemeyenler ya da ulusallara erişemeyenler ama diğerlerine erişenlerin genel sorunu internetleri serverlara erişemez. Bu bizimle alakalı bir problem değildir sizin internet firmanızın sorunudur. Cep telefonunda 4g internetle aynı yayınlara baktığınızda zaten yayın olduğunu görürsünüz. <br />

                                Yapabilecekleriniz <br />

                                ✅ Modeme reset çekin 5-10 dakika kapalı tutun, programları kapatın. Modemi açın ve programları açıp tekrar deneyin. <br />

                                ✅ İnternet arayüzüne girin, şifreyi değiştirin ve yeniden modemi başlatın. <br />

                                ✅ Çözülmediği takdirde müşteri temsilcinizi arayın, bein connect veya netflix yayınlarında sorun yaşadığınızı, wifi ile girdiğinizde yayınların düzgün çalışmadığını ama mobil internet ile sorunsuz çalıştığını söyleyin. Tam reset atsınlar, ayarlarınızı yapılandırsınlar. <br />

                                Geceleri düzenli bir süre modeme reset atın, sabah açın. Bir süre sonra düzelecektir, genelde öyle olur. Keşke bizimle alakalı olsa müdahale edebilsek. <br />
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                        <span>Kullandığım programlardan çıkış yapılmış veya film, diziler vs. açılmıyor ne yapabilirim ?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                     ✅ Biz genelde geceleri serverda güncellemeler yaparız. Bazı programlar bunları algılayamaz, güncelleme bittiğinde içerikler düzgün çalışmaz. Programa bilgilerinizle tekrar çıkış giriş yaparsanız ya da yenileme tuşuna basarsanız bu sorun genelde çözülür. Bu tarz durumlarda cep telefonunuzda mutlaka program kurulu olmalı, hızlı şekilde içerikleri çalışıyor mu diye kontrol edebilirsiniz.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                        <span>Film, dizilerin bazıları ya da hepsi donuyor ne yapabilirim ?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    ‼️ Film, dizi içerikler sabit içeriklerdir. Bu içerikler genelde gece yapılan güncellemeler dışında biz kaynaklı donma yapamaz. İnternetiniz serverlara erişemiyor olabilir, o an gecikme değerleriniz çok yüksek olabilir, yurtdışı çıkışlarınızda internet düşmüş olabilir. Bu canlı yayınlara uygulanan bir bant daraltma gibi bir engel değildir. <br />
                                    <br />
                                    ‼️İçeriklerinizi programlar üzerinde lütfen sürekli yenileyiniz, yenilenmeyen içerikler sağlıklı çalışmayabilir. Programlarda refresh, yenile, update yerleri olabilir ya da bazı programlar kendileri yeniler. <br />
                                    <br />
                                    ‼️ Film ve dizilerde en düşük kalite 1080p’dir. Bu da belirli bir hız kalitesi ister ama aşırı bir hız değil sonuçta live yayın izlemiyorsunuz, bunun için 15-20 mbps üzeri stabil internet gayet yeterli olur. Bir dizi sitesinden bile webplayer kaynaklı yayın olmasına rağmen 720p açtığınızda internet stabil değilse donma yapar. <br />
                                    <br />
                                    ‼️ Eğer hızınız iyi ama donma devam ediyorsa program değiştirip bu yayınlar kontrol edilmelidir. Tv’de bu sorunu yaşıyorsanız en hızlı yöntem cep telefonunuzdan o film, dizi içeriğini hızlıca aynı wifi ile açıp bakabilirsiniz. Cep telefonunda önerilen programlardan birinde de devam ediyorsa sorun burada problem internetinizin bizim serverlara tam erişememesi olabilir. Bu durum için ekstra mobil operatör 4g üzeri (iyi çekmeli en az 3-4 çubuk)  internet ile telefondan içerikleri açabilir, o şekilde deneyebilirsiniz, genelde 4g erişim ve kısıtlamalara takılmaz. <br />
                                    <br />
                                    ✅ Bu testler sonucunda sorun açığa kavuşacaktır. Modem resetlemek, 10-15 dakika kapalı tutmak ve tekrar açtıktan sonra programı tekrar açmak internetinizi kendine getirebilir. Modeminizi arada bir resetleyebilirsiniz. <br />
                                     <br />
                                    ✅ Müşteri temsilcisini arayıp bein connect, netflix vs. donduğunu ama 4g mobil internete geçince donmadığını söyleyin. Genel reset atsınlar, ayarlarınızı yapılandırsınlar siz de şifrenizi vs. değiştirin cihazlardan tekrar giriş yapınız.  <br />
                                    <br />
                                    </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                        <span>Ücretli veya ücretsiz program arasındaki fark nedir ?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                         ⭕️Programlar tamamen bizden bağımsızdır, program ücretlerini biz almıyoruz, siz o programa ödüyorsunuz. Biz sadece içine yüklediğiniz yayını sağlarız. <br />
                                             <br />
                                    ⭕️Ücretsiz programlar çoğu kişi tarafından kullanılır, haliyle tvde reklamsız çalıştıkları için ciddi gelir elde edemezler ve buda süreklilik getirmez. Kanal geçişlerinde yavaşlama, maç günlerinde geç açılma, kendi kendine kanallarda error verme sorunları yaşayabilirsiniz. 
                                    Ücretli programların arkasında sürekli çalışan ekipler oluyor, haliyle daha verimli oluyor. Tabii sorun yaşamazsınız demek yanlış olur ancak ücretsize göre tabii ki daha iyidir.
                                    <br />
                                    </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                        <span>• Yeni gelen dizi ve filmleri göremiyorum ne yapmam gerekiyor ? <br />
                                             • Dizi, film isteğinde bulunabilir miyim ?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                ✅ Her programın içerikleri yenilemesi farklıdır. Bazılarında refresh(yenile) tuşu vardır, basınca yenileyebilir bazıları ise her programı açtığınızda kendi kendine yeniler, içerikle yüklenir. Refresh yapmanıza rağmen hala içerikler gelmediyse programa tekrar bilgilerinizle kurulum yapın, mutlaka gelir. <br /> 

                                ✅ Qmplay2’nin diğer programlardan farkı ise yayınları kurarken indirdiğiniz dosyayı her seferinde tekrar indirmeniz, eski listeyi silip yeni dosyayı yüklemeniz gerekmektedir. Bu yüzden bilgisayar kullanımında dizi, film için ekstra 2 program önerimizi kullanmanız sizi ekstra yormamış olur. <br />

                                ‼️ Qmplay2’de dizi film izlemeseniz bile canlı kanallarda değişiklikler olabiliyor o yüzden yinede ayda 1 dosya değişimi iyidi  <br />
                                            <br />
                                • Dizi, film isteğinde bulunabilir miyim ? <br />

                                    🔴 Dizi film isteklerini yıllardır almıyoruz, bu konuda kesinlikle tolerans tanınmıyor çünkü haksızlık olmamalı. Almama sebebimiz binlerce üyeden gelecek isteklerle işleri yürütmek imkansız oluyor. Elimizden geldiğince popüler içerikler yüklenmeye çalışılıyor. <br />


                                    </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                        <span>Kaç hızla izleyebilirim ?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                ⭕️20 mbps üzeri stabil bir internet ve stabil bir program ile iptv rahat izlenir. Eğer ben 10-20 mbps arası stabil, kaliteli internete sahibim diyorsanız yine deneme yapıp görmenizi öneririz.  <br />
                            ✅ https://nperf.com ✅
                                    </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                
                


            </div>
        </div>
    )
}

export default FAQ;