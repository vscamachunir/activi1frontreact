import React, { useState } from 'react';
import './Item.css'

export const Item = ({ name, description, price, onAddToCart  }) => {
        const [count, setCount] = useState(0);

        const incrementCount = () => {
            setCount(count + 1);
        };

        const decrementCount = () => {
            if (count > 0) {
                setCount(count - 1);
            }
        };

    return (
        <div className="card">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0QDRAQDw8PDg8NDQ0PDQ0QDxIREA0NFR0YFhURFRMYHCggGBolGxUVITEhJSkrLi4uFx8zODMsQygtLisBCgoKDg0OGg8QGisfFx0rLS0tKysrNy0uLS0rLSstLS0tKy0rKy0tLS0tLS0rLS0tLS0rNystKy0rLS03KystLf/AABEIAMUBAAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQIDBQYEB//EADoQAAIBAQIKBwcEAgMAAAAAAAABAgMEEQUGEiExMjNykbFBUWFxgaHBEyJCUnOC0RQ0Q2IkkhWy8P/EABkBAQEAAwEAAAAAAAAAAAAAAAABAgMEBf/EACQRAQACAgICAwEBAAMAAAAAAAABAgQxAxEyQSFRcRJhE0JS/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMdWvCGtJLnwMbWiu2UVmdPBXwr8kfGX4Oe2R/5hurwfbxStdVu/Ll4O5cDTPLefntujjr9Lxt9ZfFf3pFjmvHtjPFX6ZY4VqdKi+KMoybe4YzwVZY4WXTDhIzjJj3DGeD/WWOFKXTlLwM4yKMZ4LM8bXTavv8mbI5Kz7YTS0LqtB/FHiZRaJY9SyJlQAAAAAAAAAAAAAAAAAAAAAANgeSthCnHQ8p9Ufyarc1a/62V4rS8FbCNSWj3F2aeJz257Tr4b68NY38vI3fpz9po77bYQFAAEJN6M4GeFmb05uZlFGE3hmjSjH8szisQwm0yve+hcSoOPXn5AY5V4rRnfZ+TH++tMop2xK21U80muy+/mT/AJr/AGy/4q/TLHClVacl96/BnGRdjPBVljhd9MF4MzjK+4Yzj/Us0cLU+mMlwZnGTVhOPZljhGi/iu70zOOek+2M8N49M0bTTeicf9kZRes6lhNLR6ZEzNikAAAAAAAAAAAY6taEV7zS/wDdRja0V2sVmdPDWwovgjf2v8Gi2RH/AFbq8P28Fa0TnrSb7Ojgc9uS1ty31pWumMwZIAAAq0KcnoXiWImUmYh6IWZdLv7EZRRhN/pkWSsy4LSZwwmU5+7zYEPJWd8XpGhhnaV0LxZhN/pnFPtgnUb0swmZlsiIhUioIAACEFhjr2inBXzko8+AVqLXh5aKUful+CHTeYkVpTjWlJ3tyhwznXi+3Lk+nUHY5QAAAAAAACtSV0W9Nybu7iTPUdrEduar4y3txyZ07ndmipPin6HFbJmdfDrrjxG/lg/5Gi87qXPrnfH/ALGrvts/npmp1YS1ZRl3NMguAAhAZoWeT05jKKyxm0M8KEV29rM4rEMZtK2V1Z+XErFNz6X4LMBSVSMfwiTMQsVmWCdpfRm5mE3ZxRgbb05zBmAAoBBAA8lrwhRpL35K/wCVZ2O16aS14wTlmprIXzPPIitVOpKTvk3J9bCpiB2+IOzq70fU68X25Mn06s7HKAAAAAAAAUr6kt2XIltStdvndo15d7PInb1Y0omRUu56Un3pPmXtOoXhUa0NrdlKK4Jl7T+YZo2yovjl45L5q8v9J/LoKVoSWrHvuz8TfExHpzTEz7Zf1UerzL/UJ1KVUpvS34q/yQ+D5YLRhOhCTi5xUl8zyVxZjNohlFZlj/V5erKLX9ZJ8jCbTLOKxCpiyAAAKAGBrLdhuhSzZWXL5Y5/MnbLpoLbh6tUvUX7OPUtPEitbe3ned9bCLIDIgq8QO3xB2dXej6nZi+3Jk+nVnW5QAAAAAAAClbUluyJbSxt87tGvLvZ5E7etGmMgkCQJKOgWg3OWUlADU25v2svDka7bbqaeVwi9MYvtcUzFl0tG9aHKPdOS8r7h2nTLG0VVoqS+5RfpeXtOmSNurLT7OX2uPnex2dMkcJS+Kl/rNPmkOzp58J4ejRSShJykr0nckuA7IiHNW3DFetrSyY/LHMh0y/HiQRdAXRBdAZEFXiB3GIOyq78fU7MXUuTJ3DqjrcoAAAAAAABWpqvuZJ0sbfObRry72ePO3rRpjCpCJAkDoIaF3I3uZYIFGnt+1l4cjVbbdTTARmkIASVEoDS4za9PcYSGnQVeIF0BdEF0BkQVeIHcYg7Krvx9TsxdS48ncOqOtzAAAAAAAAFZ6H3Mk6WHzmvry72ePO3rRpjIoUSESB0FPVW6jfDmnawEhGnt+1l4cjXbbdTTzkZpAkIASio02M2vT3GEhp0FXiBdAXRBdAZEFXiB3GIOyq78fU7MXUuPJ3DqjrcwAAAAAAABEtD7gPm9o15bzPGnb140oRQAUSEb+jqR3Y8jfGnNO2QABp8IbWXhyNdtt1NMBiyCiQJCJA02M2vT3GVjDToKvEC6AuiC6AyIKvEDuMQdlV34+p2YupceTuHVHW5gAAAAAAACHoA+bWjXlvM8advYrpQipCAAo39DUjuR5G+NOadsgRIGnwhtZfbyNdtt1NPOYskgCiQJQRp8ZdenuMqNOgLxAugLogugMiCrxA7jEHZVd+PJnZi6lx5O4dUdbmAAAAAAAAAHzW07SW8zxrbexXTGRUgSEANtZ7bTUYxbaajFPNmvNsWhotSe+3tTM2ABqMIbWX28jVbbfTTzkZARIAolBGoxl1qe4+ZUadAXiBdAXRBdAZEFXiB3GIOyq78eR2YupceTuHVHW5gAAAAAAAAB81tW0lvM8a25exXUMRFSBIEhADJTrzirlJpdV5YmUmsS99nwkrrprP8y/Bsi/21Tx/Ty22alUbTvTSz+BjaflnSOoYTFkkoBEgEUanGXWp7j5lYtOgLxAugLogugMiCrxA7nEHY1fqR5HZi6lx5O4dSdbmAAAAAAAAAHzW2bWe/LmeNbyl7FPGGIjICJAkCQgAKJCJAkCSgESgNTjLrU9x8zJi06AvEC6AuiC6AyIKvEDucQdjV+pHkduLqXHk7h1J1OYAAAAAAAAAfNbbtam/LmeNfyl7FPGGExZJKARIEgSEABRIRIEgSUEEarGTWpbj5mTFp0BeIF0BdEF0BkQVeIHc4g7Gr9RcjtxdS48ncOpOpzAAAAAAAAAD5tb9vU+pPmzxr+U/r2OPxhgMWQBJQCJAkCQgAKJCJAkCUUanGTWpbj5mTBqEBeIF0BdEF0BkQVeIHc4g7Gr9RcjtxdS48ncOpOpzAAAAAAAAAD5thHb1fq1ObPH5PKf17HH4R+POYMkgAJKARIEgSEABRIRIEoDVYya1LcfMzYNQgLxAugLogugMiCrxA7rEHYVfqLkduLqXHk7h1B1OYAAAAAAAAAfNsKfua31qnNnj8nnP69ji8I/HmMGaQiQAElAIkCQJCAAokIlAavGTWpbj5mbBqEBeIF0BdEF0BkQVeIHd4hft6n1fRHbi+MuPJ3DpzqcwAAAAAAAAA+bYV/c1vrVObPH5fOf16/F4R+PMa2wKJCJAASUAiQJAkIACiUEazGPWpbj5mbBqEBeIF0BdEF0BkQVbKS0+Ha+wD6DiRZqsLPJ1ISp5dTKgpK6Tjcs7XQd+PSa1ntw89otPw6I6GgAAAAAAAAAfN8ML/ACq31qnNnj8vnP69fh8I/HkNbYkAUSESAAkoBEgSBIQAlFGsxj1qW4+ZnDXLUIC8QLoC6ILZSWdu4Dc4HxetdpucY+xpP+aomr1/WGl8jdTgtb/Iar81a/rucD4t2WzXSUfaVemtUzyv7OiPgdtOKtNOS/La224NjWAAAAAAAAAAHI4VxYtM61SpTqUmqk5TUZqUWr8916OLkxZtaZidu3jyorWImNNVWwBb4aaGWuunOL8nczRONyR6b4yeOfbw1qVWntKVWn2ypyS4mqeO0bhtjkrOpYo1oPRJcTFkyICQiQAElAIkCQJCAGtxj1qW4+ZshrlqEBeIF77tIG0wNgO1WvPShk0+mvUvUPt6ZeBtpw2v+Nd+Wtf13OBcULLZ7pz/AMiqs+XUXuxf9YaF5nXThrX/AGXJfmtb8dEbmoAAAAAAAAAAAAAAAAea0YPs9TaUac96EW+JjNKzuGUXtGpa2tirYZaKTpvrpzlHyvuNU4/HPptjI5I9vDWxNh/HaKkeyajNehrnEr6lsjLt7h4q2KdrjqVKNTvyoP1RqnEt6ltjLr7h4a2BrdDWs8pLrhKM/K+81Tj8kemyOfjn28VTKhrwqU9+nJehrmto3DZFonUojVi9Ek/EjJcIkCQJQRrcY9aluPmbIa5ahAbLBGBrVandQptw6a0/dpR8fi8DZTitbTC/JWu3c4GxIs1K6dd/qaiz+8rqUX2Q6fE66cFa7+XJfntbXw6mKSVyVyWhLQkb2lIAAAAAAAAAAAAAAAAAAAAAAABDSenOB47Rgmy1NehSl25CT4ownjrO4ZxyWjUtfWxTsUtWM6e5UfJ3mucbjlsjJvDxVsT3/HaZLsqQUvNXGqcSPUtkZc+4eGtixbY6vsaq7JOL80apxL+m2Mqk7eKrg61w17NVu643TXka54bx6bI5qT7eO3YItVqqUo0aM80WpTmnCEM/S36GVOK1vjphbkrX57dHgXESz0rp2mX6maz5F11KL3fi8eB10x6xv5ct+eZ18OshFJJJJJZkkrkl3HQ0LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k=" className="card-img-top" alt="..."/>
            <h5 className="card__title-center">{name}</h5>
            <p className="card__description-center">{description}</p>
            <p className="card_price-big">${price.toFixed(2)}</p>
            <div className="card__counter">
                <button className="counter__button" onClick={decrementCount}>-</button>
                <h2 className="counter__number">{count}</h2>
                <button className="counter__button" onClick={incrementCount}>+</button>
            </div>
            <a href="/shoppingcart" className="btn btn-primary">Add car</a>
        </div>
    );
};

