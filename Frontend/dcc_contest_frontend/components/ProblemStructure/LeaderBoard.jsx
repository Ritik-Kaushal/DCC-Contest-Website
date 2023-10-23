import { useState, useEffect } from "react";
import leaddata from "../../utils/fakeData/leaddata";
import { streak } from "../../utils/helper/apiIntegration";
import Spinner from "../Spinner/Spinner";
import { BASE_URL } from "../../utils/constants";

export default function LeaderBoard() {
  // console.log(BASE_URL);
  const [leaderBoard, setLeaderBoard] = useState([]);
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchQuestions() {
      const url = `${BASE_URL}/21days/leaderboard`;
      try {
        const res = await fetch(url);
        const { data } = await res.json();
        setLoading(false);
        setLeaderBoard(data);
      } catch (error) {
        setServerError(
          "Network Error. Please check your internet connectivity."
        );
        console.error("Error fetching questions:", error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, []);
  if (loading)
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );
  if (serverError)
    return (
      <div className="flex justify-center p-2">
        <div className="alert alert-error shadow-lg w-fit">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{serverError}</span>
          </div>
        </div>
      </div>
    );

  return (
    <>
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Dummy div to facilitate justify between */}
        <div></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
          viewBox="0 0 438 512.01"
          height={90}
        >
          <path
            fill="#26292B"
            fillRule="nonzero"
            d="M12.39 96.25h64.25c-.02-10.18.07-6.99.24-18.07V37.73h282.28v40.49c.08 11.26.06 8.04-.06 18.07h66.54v.03c6.3 0 11.56 4.95 11.85 11.31.9 18.53.73 36.72-1.53 53.67-2.34 17.61-6.92 33.87-14.83 47.78-7.78 13.68-18.77 25.06-33.97 33.19-14.1 7.54-28.08 11.98-50 12.86-7.1 23.94-33.07 45.13-52.79 63.09-23.78 18.17-41.69 31.87-27.77 73.82h6.99c16.62 0 30.19 13.57 30.19 30.19v12.16h16.79c8.17 0 15.62 3.34 21.02 8.73 5.4 5.4 8.74 12.82 8.74 21.02v20.19c0 3.77-3.07 6.84-6.85 6.84H102.6c-3.78 0-6.84-3.07-6.84-6.84v-20.19c0-8.16 3.33-15.58 8.72-20.98l.05-.04c5.4-5.39 12.82-8.73 20.98-8.73h16.78v-12.16c0-16.56 13.64-30.19 30.19-30.19h9.59c12.43-39.58-3.86-52.4-26.37-70.13-26.04-15.62-47.01-47.08-58.74-66.96-22.73-.72-32.29-5.02-46.69-12.78-15.11-8.14-26.01-19.53-33.7-33.21-7.8-13.88-12.31-30.11-14.6-47.71-2.17-16.7-2.35-34.57-1.49-52.77v-.33c0-6.58 5.33-11.9 11.91-11.9zm345.44 43.45c-1.48 29.14-4.12 51.71-7.81 69.62 7.74-1.63 14.11-4.1 19.3-7.34 6.2-3.86 10.82-8.93 14.24-15.02 3.69-6.58 6.01-14.37 7.44-23.13 1.18-7.29 1.73-15.38 1.92-24.11h-34.54l-.55-.02zm-280.16 0h-31.2c.15 8.73.64 16.85 1.74 24.22 1.31 8.83 3.47 16.63 6.96 23.14 3.23 6.05 7.68 11.1 13.77 14.96 4.86 3.1 10.81 5.49 18.05 7.11-5.15-20.25-7.97-43.1-9.32-69.43z"
          />
          <path
            fill="#FFCE6B"
            fillRule="nonzero"
            d="M358.38 127.82h41.77c2.62 0 4.75 2.12 4.75 4.73 0 23.91-2.16 44.51-10.98 60.22-8.77 15.62-26.29 27.68-52.7 29.43-4.19 8.48-5.38 15.44-10.55 21.33 42.32-1.12 66.72-16.71 80.15-40.31 14.18-24.97 16.55-59.21 14.82-95.03h-67.26v19.63z"
          />
          <path
            fill="#fff"
            fillRule="nonzero"
            d="M77.52 108.15H12.39c-1.77 35.82.51 70.03 14.55 95 13.25 23.57 37.45 39.15 79.59 40.34-3.23-5.9-2.53-12.09-8.75-20.46-26.13-2.23-44.66-14.66-53.07-30.39-8.42-15.71-10.21-36.25-10.21-60.1a4.75 4.75 0 014.74-4.74h38.28v-19.65z"
          />
          <path
            fill="#26292B"
            fillRule="nonzero"
            d="M307.59 434.35v.04h2.98c8.16 0 15.63 3.33 21.02 8.73 5.4 5.4 8.74 12.82 8.74 21.02v41.02c0 3.78-3.08 6.85-6.85 6.85H102.6c-3.77 0-6.84-3.07-6.84-6.85v-41.02c0-8.16 3.33-15.58 8.73-20.97l.04-.05c5.4-5.4 12.82-8.73 20.98-8.73h2.98v-.04h179.1z"
          />
          <path
            fill="#fff"
            fillRule="nonzero"
            d="M272.67 454.72h-134.8c-4.56 0-8.69 1.84-11.67 4.83l-.05.04a16.475 16.475 0 00-4.82 11.68v20.37h193.42v-20.37c0-4.52-1.84-8.65-4.87-11.68-2.98-2.98-7.11-4.87-11.67-4.87h-25.54zM195.73 396.8h24.55v-68.76c-85.58-30.43-94.33-134.96-114.74-280.12H86.97v103.34c1.71 39.31 8.3 68.41 17.37 90.7 8.99 22.02 20.54 37.41 32.36 49.37 8.62 8.76 17.64 15.84 25.9 22.35 31.8 24.98 40.98 35.89 33.13 83.12z"
          />
          <path
            fill="#FFCE6B"
            fillRule="nonzero"
            d="M218.9 396.8h24.07c-14.98-49.06 6.5-65.44 34.8-87.05 31.04-23.7 71.39-54.47 71.39-155.74V47.92H104.85c13.18 93.71 21.21 170.49 48.27 221.32 10.75 18.21 22.64 32.75 35.85 43.02 6.41 4.73 13.42 8.82 21.11 12.25 2.79 1.11 5.63 2.07 8.53 2.85v.57l.29.11v68.76z"
          />
          <path
            fill="#fff"
            d="M289.27 257.78l-.28.37c-3.09-2.23-6.63-3.04-10.61-2.4-3.99.63-7.11 2.51-9.35 5.59l-.38-.27c2.24-3.09 3.04-6.64 2.4-10.63-.64-3.98-2.5-7.1-5.58-9.33.09-.13 9.3 2.28 10.89 2.03 3.99-.64 7.1-2.5 9.35-5.6l.38.28c-2.24 3.08-3.05 6.64-2.4 10.62.62 3.98 2.49 7.1 5.58 9.34zm34.84-62.8l-.28.38c-3.09-2.24-6.63-3.04-10.62-2.41-3.98.64-7.1 2.5-9.34 5.59l-.39-.26c2.25-3.1 3.04-6.64 2.41-10.63-.65-3.99-2.5-7.1-5.58-9.34l.28-.38c3.08 2.24 6.63 3.05 10.61 2.4 3.99-.63 7.11-2.49 9.35-5.58l.38.27c-2.24 3.09-3.05 6.64-2.4 10.62.61 3.99 2.48 7.1 5.58 9.34zm8.22-86.64l-.5.7c-5.65-4.1-12.14-5.57-19.43-4.4-7.29 1.16-12.99 4.57-17.09 10.23l-.7-.5c4.1-5.66 5.58-12.14 4.39-19.44-1.17-7.3-4.58-13-10.22-17.08l.5-.69c5.66 4.09 12.14 5.56 19.44 4.4 7.29-1.17 12.98-4.57 17.08-10.24l.69.5c-4.09 5.65-5.56 12.14-4.4 19.43 1.17 7.3 4.58 13 10.24 17.09z"
          />
          <path
            fill="#252D32"
            fillRule="nonzero"
            d="M67.04 0h317.48c6.52 0 12.46 2.67 16.74 6.96 4.29 4.28 6.96 10.21 6.96 16.74 0 6.53-2.67 12.47-6.96 16.75-4.28 4.29-10.22 6.96-16.74 6.96H67.04c-6.53 0-12.46-2.67-16.74-6.96-4.29-4.28-6.96-10.22-6.96-16.74 0-6.54 2.67-12.47 6.96-16.75C54.58 2.67 60.51 0 67.04 0z"
          />
          <path
            fill="#fff"
            d="M102.12 37.06l-4.98-26.71h-30.1c-3.67 0-7.02 1.51-9.43 3.93a13.331 13.331 0 00-3.92 9.42c0 3.67 1.51 7.02 3.92 9.44 2.41 2.41 5.76 3.92 9.43 3.92h35.08z"
          />
          <path
            fill="#FFCE6B"
            d="M102.12 37.06l-4.98-26.71h287.38c3.66 0 7.01 1.51 9.43 3.93 2.41 2.41 3.92 5.76 3.92 9.43 0 3.66-1.51 7.01-3.92 9.43-2.42 2.41-5.77 3.92-9.43 3.92h-282.4z"
          />
          <path
            fill="#252D32"
            fillRule="nonzero"
            d="M254.6 142.83c1.83.98 3.45 2.16 4.84 3.53 2.52 2.48 4.41 5.54 5.65 9.12 1.16 3.33 1.74 7.04 1.74 11.1v22.01c0 15.53-7.4 24.55-22.18 27.06v7.63c0 3.92-3.18 7.1-7.1 7.1h-27.68c-3.92 0-7.1-3.18-7.1-7.1v-7.78c-5.78-1.17-10.46-3.46-14.03-6.86-5.09-4.85-7.64-11.54-7.64-20.05v-12.84c0-3.92 3.17-7.1 7.09-7.1h3.66c-1.52-.95-2.87-2.05-4.06-3.31-2.42-2.58-4.22-5.68-5.39-9.27-1.08-3.33-1.64-7.07-1.64-11.17v-22.01c0-15.41 7.34-24.42 22.01-27.03v-7.83c0-3.92 3.18-7.1 7.1-7.1h27.68c3.92 0 7.1 3.18 7.1 7.1v7.93c5.82 1.17 10.54 3.45 14.14 6.85 5.13 4.85 7.71 11.56 7.71 20.08v12.84c0 3.92-3.18 7.1-7.1 7.1h-4.8z"
          />
          <path
            fill="#fff"
            fillRule="nonzero"
            d="M221.21 146.23h15.68c8.22 0 14.09 1.73 17.59 5.18 3.5 3.44 5.25 8.5 5.25 15.17v22.01c0 13.23-7.39 20.12-22.18 20.68v14.01h-27.68v-14.01c-14.45-.78-21.68-7.67-21.68-20.68v-12.84h29.18v9.01c0 2.44 1.4 3.67 4.18 3.67h4.83c2.78 0 4.17-1.23 4.17-3.67v-15.18c0-2.44-1.39-3.67-4.17-3.67h-16.01c-8.22 0-14.03-1.81-17.43-5.42-3.39-3.62-5.09-8.81-5.09-15.59v-22.01c0-13.12 7.34-20.02 22.02-20.69V88.03h27.68v14.17c14.57.78 21.85 7.68 21.85 20.69v12.84h-29.18v-9.01c0-2.45-1.39-3.67-4.17-3.67h-4.84c-2.78 0-4.17 1.22-4.17 3.67v15.84c0 2.45 1.39 3.67 4.17 3.67z"
          />
        </svg>

        <h1 className="text-4xl">LeaderBoard</h1>

        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" height={90}>
          <path d="m63 59v4h-62v-4h4 18 18 18z" fill="#422b57" />
          <path d="m41 45h18v14h-18z" fill="#774e9d" />
          <path d="m5 37h18v22h-18z" fill="#9c59a9" />
          <path
            d="m34 17v4h-4v-4l.07-.27a7.033 7.033 0 0 0 3.86 0z"
            fill="#ff9102"
          />
          <path d="m37 21v4h-10v-4h3 4z" fill="#ffcb02" />
          <path
            d="m39 10a5.365 5.365 0 0 1 -.08.99 6.972 6.972 0 0 1 -4.99 5.74 7.033 7.033 0 0 1 -3.86 0 6.972 6.972 0 0 1 -4.99-5.74 5.365 5.365 0 0 1 -.08-.99v-9h14z"
            fill="#ffcb02"
          />
          <path d="m23 25h18v34h-18z" fill="#cb73db" />
          <path
            d="m29.08 10.99a5.365 5.365 0 0 1 -.08-.99v-9h-4v9a5.365 5.365 0 0 0 .08.99 6.972 6.972 0 0 0 4.99 5.74 7.033 7.033 0 0 0 3.86 0c.024-.007.046-.019.07-.026a6.968 6.968 0 0 1 -4.92-5.714z"
            fill="#ffab02"
          />
          <path
            d="m41.515 8.826a2 2 0 0 0 .485-1.266v-3.56h-3v6a3.08 3.08 0 0 0 2.515-1.174z"
            fill="none"
          />
          <path
            d="m22 4v3.56a2 2 0 0 0 .492 1.274 3.073 3.073 0 0 0 2.508 1.166v-6z"
            fill="none"
          />
          <path d="m27 21v4h10v-2h-6a1 1 0 0 1 -1-1v-1z" fill="#ffab02" />
          <path d="m41 45v14h18v-3h-8a6 6 0 0 1 -6-6v-5z" fill="#654285" />
          <path d="m23 37v22h-18v-3h8a6 6 0 0 0 6-6v-13z" fill="#8b4f96" />
          <path d="m23 25v34h18v-3h-8a6 6 0 0 1 -6-6v-25z" fill="#b667c4" />
          <path d="m63 58h-3v-13a1 1 0 0 0 -1-1h-13v2h12v12h-16v-12h2v-2h-2v-10h-2v24h-16v-32h16v2h2v-3a1 1 0 0 0 -1-1h-3v-3a1 1 0 0 0 -1-1h-2v-2.589a8.024 8.024 0 0 0 4.75-5.464 5.007 5.007 0 0 0 3.3-1.84 3.95 3.95 0 0 0 .95-2.549v-4.558a1 1 0 0 0 -1-1h-3v-1a1 1 0 0 0 -1-1h-14a1 1 0 0 0 -1 1v1h-3a1 1 0 0 0 -1 1v4.558a3.95 3.95 0 0 0 .955 2.549 5.007 5.007 0 0 0 3.3 1.84 8.024 8.024 0 0 0 4.745 5.464v2.589h-2a1 1 0 0 0 -1 1v3h-3a1 1 0 0 0 -1 1v11h-2v2h2v20h-16v-20h12v-2h-13a1 1 0 0 0 -1 1v21h-3a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h62a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-41-50.442v-3.558h2v5.844a3.068 3.068 0 0 1 -1.509-1.017 1.981 1.981 0 0 1 -.491-1.269zm20-3.558v3.558a1.981 1.981 0 0 1 -.491 1.269 3.068 3.068 0 0 1 -1.509 1.017v-5.844zm-16 6v-8h12v8a6 6 0 0 1 -12 0zm5 7.931a7.281 7.281 0 0 0 2 0v2.069h-2zm-3 4.069h8v2h-8zm34 40h-60v-2h60z" />
          <path d="m40 30h2v2h-2z" />
          <path d="m37 10h-2c0 .123-.045 3-4 3v2c4.746 0 6-3.271 6-5z" />
        </svg>

        {/* Dummy div to facilitate justify between */}
        <div></div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mb-2">
        <table className="table w-full mt-10">
          <thead>
            <tr>
              <th className="flex items-center justify-center">Rank</th>
              <th>Username</th>
              <th>Points</th>
              <th>Streak</th>
            </tr>
          </thead>
          <tbody>
            {leaderBoard?.map((item, index) => (
              <tr key={index}>
                <th className="flex items-center justify-center">
                  <td>
                    <label className="text-2xl">
                      {index === 0 ? (
                        <span className="text-3xl">{index + 1}👑</span>
                      ) : index === 1 ? (
                        <span className="text-3xl">{index + 1}🌟</span>
                      ) : index === 2 ? (
                        <span className="text-3xl">{index + 1}🥇</span>
                      ) : (
                        <span className="text-3xl">{index + 1}</span>
                      )}
                    </label>
                  </td>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold text-1xl">{item.username}</div>
                      <i className="text-sm opacity-50">Coder</i>
                    </div>
                  </div>
                </td>

                <td className="font-bold text-2xl">{item.totalScore * 100}</td>
                <td>
                  <label className="text-2xl">{streak(item.heatMap)}</label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Button
      <div className="join">
        <button className="join-item btn">1</button>
        <button className="join-item btn btn-active">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">4</button>
      </div> */}
    </>
  );
}
