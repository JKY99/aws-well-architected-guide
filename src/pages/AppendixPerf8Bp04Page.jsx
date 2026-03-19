import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf8Bp04Page() {
  return (
    <article className="doc-content">
      <h1>PERF08-BP04 — 지리적 분산을 통한 성능 개선</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>글로벌 사용자에게 낮은 지연 시간을 제공하기 위해 여러 AWS 리전과 엣지 로케이션에 리소스를 배포합니다.</p>
      <h2>원하는 결과</h2>
      <p>지리적으로 분산된 인프라로 모든 사용자에게 낮은 지연 시간을 제공합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>단일 리전에만 배포</li>
        <li>글로벌 사용자 고려 없음</li>
        <li>CDN 미사용</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>글로벌 지연 시간 감소</li>
        <li>지역 장애 내성 확보</li>
        <li>데이터 주권 준수</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>CloudFront + S3로 정적 콘텐츠 글로벌 배포</li>
        <li>Route 53 지연 시간 라우팅</li>
        <li>Global Accelerator로 동적 콘텐츠 가속</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudFront</li>
        <li>AWS Global Accelerator</li>
        <li>Amazon Route 53</li>
        <li>Amazon S3 Multi-Region Access Points</li>
      </ul>
      <PageNav />
    </article>
  );
}
