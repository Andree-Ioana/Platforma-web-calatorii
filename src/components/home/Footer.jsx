import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../features/articleSlice";
import { getBlogs } from "../../features/blogSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  const { blogs } = useSelector((state) => state.blog);
  const { articles } = useSelector((state) => state.article);
  let newArr = [...articles, ...blogs];
  const locations = newArr.map((l) => l.location);
  const seasons = newArr.map((l) => l.season);
  const activities = newArr.map((l) => l.activity);

  const allFields = [...locations, ...seasons, ...activities];

  const fieldCount = allFields.reduce((acc, field) => {
    acc[field] = (acc[field] || 0) + 1;
    return acc;
  }, {});
  const sortedLocations = Object.entries(fieldCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
    dispatch(getArticles());
  }, []);
  return (
    <>
      <div className="footer">
        {/* <div className="container">
          <div className="footer-content"> */}
        <div className="containers">
          <div className="etichete">
            <h3>Etichete</h3>
            <a href="#">hike</a>
            <a href="#">aerian</a>
            <a href="#">alergare</a>
            <a href="#">europa</a>
            <a href="#">alergare</a>
            <a href="#">iarna</a>
            <a href="#">hike</a>
            <a href="#">alergare</a>
            <a href="#">alergare</a>
            <a href="#">greece</a>
            <a href="#">alergare</a>
            <a href="#">plaja</a>
            <a href="#">alergare</a>
            <a href="#">alergare</a>
            <a href="#">alergare montana</a>
            <a href="#">toamna</a>
            <a href="#">alergare</a>
            <a href="#">zapada</a>
            <a href="#">vacante</a>
            <a href="#">vara</a>
            <a href="#">alergare</a>
          </div>
          <div className="despre">
            <h3>Despre</h3>
            <h4>Vinereanu Andreea</h4>
            <h4>076 3231 231</h4>
            <p>
              Fotograf independent, evenimente, nuntă, ședinte foto.
              <br /> Călătorii, drumeții în natură, hiking, mountain bike,
              filmare cu drona. 📸 🌄 🏔🏕 🚴🏻‍♂️
            </p>
            <p>
              Acest site și paginile de facebook și instagram sunt personale. Ma
              puteți suține prin Like/ Share.
            </p>
          </div>
          <div className="destinatii ">
            <h3>Destinatii</h3>
            <ul>
              {sortedLocations.map(({ name, count }) => (
                <li key={name}>
                  <Link to={`/tag/${name}`}>
                    {name} {count > 1 && `(${count})`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Pe Drumuri Straine. Toate drepturile rezervate.</p>
      </div>
    </>
  );
}
