import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus4Bp07Page() {
  return (
    <article className="doc-content">
      <h1>SUS04-BP07 — 네트워크를 통한 데이터 이동 최소화</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        공유 파일 시스템이나 객체 스토리지를 사용하여 공통 데이터에 접근하고,
        워크로드의 데이터 이동에 필요한 총 네트워킹 리소스를 최소화합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        워크로드에 필요한 총 네트워킹 리소스를 줄이고 데이터 작업의 환경적 영향을 낮추며
        워크로드의 전반적인 효율성을 개선합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>데이터 사용자의 위치와 관계없이 모든 데이터를 동일한 AWS 리전에 저장하는 경우</li>
        <li>네트워크로 이동하기 전에 데이터 크기와 형식을 최적화하지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>네트워크를 통한 데이터 이동 최적화로 워크로드에 필요한 네트워킹 리소스 감소</li>
        <li>네트워킹 리소스 감소로 환경적 영향 절감</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>워크로드 리전 선택 시 데이터 또는 사용자와의 근접성을 고려합니다.</li>
        <li>리전별로 소비되는 서비스를 파티셔닝하여 리전별 데이터가 해당 리전 내에 저장되도록 합니다.</li>
        <li>Parquet 또는 ORC 형식을 사용하고 네트워크로 이동하기 전에 데이터를 압축합니다.</li>
        <li>API 응답을 관련 데이터만 포함하도록 줄이고 상세 레코드 수준 정보가 필요하지 않은 경우 데이터를 집계합니다.</li>
        <li>AWS Lake Formation으로 계정 간 데이터 공유를 구현합니다.</li>
        <li>컴퓨팅 집약적인 작업에는 Lambda@Edge를, 간단한 HTTP(s) 요청/응답 조작에는 CloudFront Functions를 사용합니다.</li>
        <li>IoT 디바이스의 경우 AWS IoT Greengrass로 로컬 컴퓨팅, 메시징, 데이터 캐싱을 실행합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Lambda@Edge — 캐시되지 않은 객체에 대한 컴퓨팅 집약적 작업</li>
        <li>CloudFront / CloudFront Functions — 간단한 HTTP(s) 요청·응답 조작</li>
        <li>AWS IoT Greengrass — 연결된 디바이스를 위한 로컬 컴퓨팅 및 데이터 캐싱</li>
        <li>Amazon Redshift (데이터 공유) — 데이터 이동 없는 데이터 공유</li>
        <li>AWS Lake Formation — 계정 간 데이터 공유</li>
        <li>Amazon S3 — 공통 데이터를 위한 객체 스토리지</li>
      </ul>

      <PageNav />
    </article>
  );
}
