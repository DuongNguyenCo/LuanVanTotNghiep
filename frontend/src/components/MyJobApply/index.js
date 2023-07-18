function DivMyJobApply(prop) {
    const { name, location, language, salaryMin, salaryMax, dateApply, img } = prop;
    const a = new Date(dateApply);
    return (
        <div className="odd:bg-w even:bg-[rgb(255,241,225)] px-4 py-2">
            <div className="mb-2">
                <div className="text-[14px] text-[rgb(78,76,77)]">{`Ngày ứng tuyển: ${a.toLocaleDateString()}`}</div>
            </div>
            <div className="flex items-center mb-3">
                <div className="flex-1 w-3/12 mr-4">
                    <img src={img} alt="123" />
                </div>
                <div className="flex-[4]">
                    <div className="font-bold">{name}</div>
                    <div className="flex gap-2">
                        {location.map((e) => {
                            const list = [
                                '1',
                                '2',
                                '3',
                                '4',
                                '5',
                                '6',
                                '7',
                                '8',
                                '9',
                                '10',
                                '11',
                                '12',
                                '13',
                                '14',
                                '15',
                                '16',
                                '17',
                                '18',
                                '19',
                                '20',
                            ];
                            let a = e.district.split(' ');
                            return (
                                <p className="bg-second px-2 rounded-[5px]" key={e.id}>
                                    {a[0] === 'Thành'
                                        ? ((a = a.slice(2)), (a = a.join(' ')))
                                        : a[0] === 'Quận' && list.includes(a[1])
                                        ? (a = a.join(' '))
                                        : ((a = a.slice(1)), (a = a.join(' ')))}
                                </p>
                            );
                        })}
                    </div>
                    <div className="text-[14px] text-[rgb(104,186,80)] mb-1">
                        {salaryMin !== 0 && salaryMax !== 0
                            ? salaryMin.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) +
                              ' - ' +
                              salaryMax.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
                            : salaryMax === 0 && salaryMin !== 0
                            ? salaryMin.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) + ' UPTO '
                            : "You'll love it"}
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {language.map((e) => {
                            return (
                                <p className=" px-2 mr-2 border border-text1 text-center hover:border-red" key={e.id}>
                                    {e.name}
                                </p>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DivMyJobApply;
