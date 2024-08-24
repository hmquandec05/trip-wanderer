import React from "react";

export default function ProfileTrips() {
  return (
    <>
      <div className="container">
        <div className="row align-items-start" style={{ marginTop: "40px" }}>
          <div
            className="d-flex col position-relative"
            style={{
              cursor: "pointer",
              padding: "10px 12px",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 5px 10px #046CB8")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 5px 10px rgba(0, 0, 0, 0.3)")
            }
          >
            <div className="trip-img">
              <img
                src="https://file1.dangcongsan.vn/data/0/images/2022/06/11/oanhvh/f01d3683bc1f7c41250e.jpg"
                alt="profile post"
                className="object-fit-cover rounded"
                style={{ width: "200px", height: "150px" }}
              />
            </div>
            <div
              className="trip-content"
              style={{
                marginLeft: "16px",
                marginRight: "26px",
              }}
            >
              <h5 className="trip-title fw-bold">
                1 ngày vi vu ở Huế mộng mơ - ăn gì chơi ở đâu
              </h5>
              <p className="trip-text">
                Khám phá ẩm thực Huế. Tham quan Lăng Minh Mạng uy nghiêm. Dạo
                quanh mọi ngóc ngách con hẻm ở Huế.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div
                  className="text-muted py-1 px-2"
                  style={{ backgroundColor: "#D9D9D9", borderRadius: "10px" }}
                >
                  <i className="bi bi-geo-alt-fill"></i> Huế, Việt Nam
                </div>
                <h4 className="fw-bold" style={{ color: "#046CB8" }}>
                  FREE
                </h4>
              </div>
            </div>
            <div
              className="position-absolute top-0 end-0 m-2"
              style={{
                fontSize: "24px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.scale = 1.2)}
              onMouseLeave={(e) => (e.currentTarget.style.scale = 1)}
            >
              <i className="bi bi-three-dots-vertical"></i>
            </div>
          </div>
        </div>
        <div className="row align-items-start" style={{ marginTop: "40px" }}>
          <div
            className="d-flex col position-relative"
            style={{
              cursor: "pointer",
              padding: "10px 12px",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 5px 10px #046CB8")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 5px 10px rgba(0, 0, 0, 0.3)")
            }
          >
            <div className="trip-img">
              <img
                src="https://file1.dangcongsan.vn/data/0/images/2022/06/11/oanhvh/f01d3683bc1f7c41250e.jpg"
                alt="profile post"
                className="object-fit-cover rounded"
                style={{ width: "200px", height: "150px" }}
              />
            </div>
            <div
              className="trip-content"
              style={{
                marginLeft: "16px",
                marginRight: "26px",
              }}
            >
              <h5 className="trip-title fw-bold">
                1 ngày vi vu ở Huế mộng mơ - ăn gì chơi ở đâu
              </h5>
              <p className="trip-text">
                Khám phá ẩm thực Huế. Tham quan Lăng Minh Mạng uy nghiêm. Dạo
                quanh mọi ngóc ngách con hẻm ở Huế.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div
                  className="text-muted py-1 px-2"
                  style={{ backgroundColor: "#D9D9D9", borderRadius: "10px" }}
                >
                  <i className="bi bi-geo-alt-fill"></i> Huế, Việt Nam
                </div>
                <h4 className="fw-bold" style={{ color: "#046CB8" }}>
                  FREE
                </h4>
              </div>
            </div>
            <div
              className="position-absolute top-0 end-0 m-2"
              style={{
                fontSize: "24px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.scale = 1.2)}
              onMouseLeave={(e) => (e.currentTarget.style.scale = 1)}
            >
              <i className="bi bi-three-dots-vertical"></i>
            </div>
          </div>
        </div>
        <div className="row align-items-start" style={{ marginTop: "40px" }}>
          <div
            className="d-flex col position-relative"
            style={{
              cursor: "pointer",
              padding: "10px 12px",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 5px 10px #046CB8")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 5px 10px rgba(0, 0, 0, 0.3)")
            }
          >
            <div className="trip-img">
              <img
                src="https://file1.dangcongsan.vn/data/0/images/2022/06/11/oanhvh/f01d3683bc1f7c41250e.jpg"
                alt="profile post"
                className="object-fit-cover rounded"
                style={{ width: "200px", height: "150px" }}
              />
            </div>
            <div
              className="trip-content"
              style={{
                marginLeft: "16px",
                marginRight: "26px",
              }}
            >
              <h5 className="trip-title fw-bold">
                1 ngày vi vu ở Huế mộng mơ - ăn gì chơi ở đâu
              </h5>
              <p className="trip-text">
                Khám phá ẩm thực Huế. Tham quan Lăng Minh Mạng uy nghiêm. Dạo
                quanh mọi ngóc ngách con hẻm ở Huế.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div
                  className="text-muted py-1 px-2"
                  style={{ backgroundColor: "#D9D9D9", borderRadius: "10px" }}
                >
                  <i className="bi bi-geo-alt-fill"></i> Huế, Việt Nam
                </div>
                <h4 className="fw-bold" style={{ color: "#046CB8" }}>
                  FREE
                </h4>
              </div>
            </div>
            <div
              className="position-absolute top-0 end-0 m-2"
              style={{
                fontSize: "24px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.scale = 1.2)}
              onMouseLeave={(e) => (e.currentTarget.style.scale = 1)}
            >
              <i className="bi bi-three-dots-vertical"></i>
            </div>
          </div>
        </div>
        <div className="row align-items-start" style={{ marginTop: "40px" }}>
          <div
            className="d-flex col position-relative"
            style={{
              cursor: "pointer",
              padding: "10px 12px",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 5px 10px #046CB8")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 5px 10px rgba(0, 0, 0, 0.3)")
            }
          >
            <div className="trip-img">
              <img
                src="https://file1.dangcongsan.vn/data/0/images/2022/06/11/oanhvh/f01d3683bc1f7c41250e.jpg"
                alt="profile post"
                className="object-fit-cover rounded"
                style={{ width: "200px", height: "150px" }}
              />
            </div>
            <div
              className="trip-content"
              style={{
                marginLeft: "16px",
                marginRight: "26px",
              }}
            >
              <h5 className="trip-title fw-bold">
                1 ngày vi vu ở Huế mộng mơ - ăn gì chơi ở đâu
              </h5>
              <p className="trip-text">
                Khám phá ẩm thực Huế. Tham quan Lăng Minh Mạng uy nghiêm. Dạo
                quanh mọi ngóc ngách con hẻm ở Huế.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div
                  className="text-muted py-1 px-2"
                  style={{ backgroundColor: "#D9D9D9", borderRadius: "10px" }}
                >
                  <i className="bi bi-geo-alt-fill"></i> Huế, Việt Nam
                </div>
                <h4 className="fw-bold" style={{ color: "#046CB8" }}>
                  FREE
                </h4>
              </div>
            </div>
            <div
              className="position-absolute top-0 end-0 m-2"
              style={{
                fontSize: "24px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.scale = 1.2)}
              onMouseLeave={(e) => (e.currentTarget.style.scale = 1)}
            >
              <i className="bi bi-three-dots-vertical"></i>
            </div>
          </div>
        </div>
        <div className="row align-items-start" style={{ marginTop: "40px" }}>
          <div
            className="d-flex col position-relative"
            style={{
              cursor: "pointer",
              padding: "10px 12px",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 5px 10px #046CB8")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 5px 10px rgba(0, 0, 0, 0.3)")
            }
          >
            <div className="trip-img">
              <img
                src="https://file1.dangcongsan.vn/data/0/images/2022/06/11/oanhvh/f01d3683bc1f7c41250e.jpg"
                alt="profile post"
                className="object-fit-cover rounded"
                style={{ width: "200px", height: "150px" }}
              />
            </div>
            <div
              className="trip-content"
              style={{
                marginLeft: "16px",
                marginRight: "26px",
              }}
            >
              <h5 className="trip-title fw-bold">
                1 ngày vi vu ở Huế mộng mơ - ăn gì chơi ở đâu
              </h5>
              <p className="trip-text">
                Khám phá ẩm thực Huế. Tham quan Lăng Minh Mạng uy nghiêm. Dạo
                quanh mọi ngóc ngách con hẻm ở Huế.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div
                  className="text-muted py-1 px-2"
                  style={{ backgroundColor: "#D9D9D9", borderRadius: "10px" }}
                >
                  <i className="bi bi-geo-alt-fill"></i> Huế, Việt Nam
                </div>
                <h4 className="fw-bold" style={{ color: "#046CB8" }}>
                  FREE
                </h4>
              </div>
            </div>
            <div
              className="position-absolute top-0 end-0 m-2"
              style={{
                fontSize: "24px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.scale = 1.2)}
              onMouseLeave={(e) => (e.currentTarget.style.scale = 1)}
            >
              <i className="bi bi-three-dots-vertical"></i>
            </div>
          </div>
        </div>
        <div className="row align-items-start" style={{ marginTop: "40px" }}>
          <div
            className="d-flex col position-relative"
            style={{
              cursor: "pointer",
              padding: "10px 12px",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 5px 10px #046CB8")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 5px 10px rgba(0, 0, 0, 0.3)")
            }
          >
            <div className="trip-img">
              <img
                src="https://file1.dangcongsan.vn/data/0/images/2022/06/11/oanhvh/f01d3683bc1f7c41250e.jpg"
                alt="profile post"
                className="object-fit-cover rounded"
                style={{ width: "200px", height: "150px" }}
              />
            </div>
            <div
              className="trip-content"
              style={{
                marginLeft: "16px",
                marginRight: "26px",
              }}
            >
              <h5 className="trip-title fw-bold">
                1 ngày vi vu ở Huế mộng mơ - ăn gì chơi ở đâu
              </h5>
              <p className="trip-text">
                Khám phá ẩm thực Huế. Tham quan Lăng Minh Mạng uy nghiêm. Dạo
                quanh mọi ngóc ngách con hẻm ở Huế.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div
                  className="text-muted py-1 px-2"
                  style={{ backgroundColor: "#D9D9D9", borderRadius: "10px" }}
                >
                  <i className="bi bi-geo-alt-fill"></i> Huế, Việt Nam
                </div>
                <h4 className="fw-bold" style={{ color: "#046CB8" }}>
                  FREE
                </h4>
              </div>
            </div>
            <div
              className="position-absolute top-0 end-0 m-2"
              style={{
                fontSize: "24px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.scale = 1.2)}
              onMouseLeave={(e) => (e.currentTarget.style.scale = 1)}
            >
              <i className="bi bi-three-dots-vertical"></i>
            </div>
          </div>
        </div>
        <div className="row align-items-start" style={{ marginTop: "40px" }}>
          <div
            className="d-flex col position-relative"
            style={{
              cursor: "pointer",
              padding: "10px 12px",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 5px 10px #046CB8")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 5px 10px rgba(0, 0, 0, 0.3)")
            }
          >
            <div className="trip-img">
              <img
                src="https://file1.dangcongsan.vn/data/0/images/2022/06/11/oanhvh/f01d3683bc1f7c41250e.jpg"
                alt="profile post"
                className="object-fit-cover rounded"
                style={{ width: "200px", height: "150px" }}
              />
            </div>
            <div
              className="trip-content"
              style={{
                marginLeft: "16px",
                marginRight: "26px",
              }}
            >
              <h5 className="trip-title fw-bold">
                1 ngày vi vu ở Huế mộng mơ - ăn gì chơi ở đâu
              </h5>
              <p className="trip-text">
                Khám phá ẩm thực Huế. Tham quan Lăng Minh Mạng uy nghiêm. Dạo
                quanh mọi ngóc ngách con hẻm ở Huế.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div
                  className="text-muted py-1 px-2"
                  style={{ backgroundColor: "#D9D9D9", borderRadius: "10px" }}
                >
                  <i className="bi bi-geo-alt-fill"></i> Huế, Việt Nam
                </div>
                <h4 className="fw-bold" style={{ color: "#046CB8" }}>
                  FREE
                </h4>
              </div>
            </div>
            <div
              className="position-absolute top-0 end-0 m-2"
              style={{
                fontSize: "24px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.scale = 1.2)}
              onMouseLeave={(e) => (e.currentTarget.style.scale = 1)}
            >
              <i className="bi bi-three-dots-vertical"></i>
            </div>
          </div>
        </div>
        <div className="row align-items-start" style={{ marginTop: "40px" }}>
          <div
            className="d-flex col position-relative"
            style={{
              cursor: "pointer",
              padding: "10px 12px",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 5px 10px #046CB8")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 5px 10px rgba(0, 0, 0, 0.3)")
            }
          >
            <div className="trip-img">
              <img
                src="https://file1.dangcongsan.vn/data/0/images/2022/06/11/oanhvh/f01d3683bc1f7c41250e.jpg"
                alt="profile post"
                className="object-fit-cover rounded"
                style={{ width: "200px", height: "150px" }}
              />
            </div>
            <div
              className="trip-content"
              style={{
                marginLeft: "16px",
                marginRight: "26px",
              }}
            >
              <h5 className="trip-title fw-bold">
                1 ngày vi vu ở Huế mộng mơ - ăn gì chơi ở đâu
              </h5>
              <p className="trip-text">
                Khám phá ẩm thực Huế. Tham quan Lăng Minh Mạng uy nghiêm. Dạo
                quanh mọi ngóc ngách con hẻm ở Huế.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div
                  className="text-muted py-1 px-2"
                  style={{ backgroundColor: "#D9D9D9", borderRadius: "10px" }}
                >
                  <i className="bi bi-geo-alt-fill"></i> Huế, Việt Nam
                </div>
                <h4 className="fw-bold" style={{ color: "#046CB8" }}>
                  FREE
                </h4>
              </div>
            </div>
            <div
              className="position-absolute top-0 end-0 m-2"
              style={{
                fontSize: "24px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.scale = 1.2)}
              onMouseLeave={(e) => (e.currentTarget.style.scale = 1)}
            >
              <i className="bi bi-three-dots-vertical"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
