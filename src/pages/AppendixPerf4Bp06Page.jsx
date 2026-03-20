import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf4Bp06Page() {
  return (
    <article className="doc-content">
      <h1>PERF04-BP06 — 네트워크 요구사항에 따른 워크로드 위치 선택</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>사용자와의 물리적 거리, 데이터 주권, 규정 준수 요구사항을 고려하여 워크로드를 최적의 위치에 배치합니다. 리전, 가용 영역, 엣지 위치를 전략적으로 활용합니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드를 사용자와 가까운 위치에 배치하거나 엣지 서비스를 활용하여 네트워크 지연 시간을 최소화합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>사용자 위치를 고려하지 않고 리전 선택</li>
        <li>글로벌 사용자에 대한 엣지 배포 미고려</li>
        <li>데이터 전송 비용을 무시하고 위치 선택</li>
        <li>규정 준수 요구사항 없이 여러 리전에 불필요하게 분산</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>사용자에게 가까운 위치로 지연 시간 최소화</li>
        <li>데이터 전송 비용 최적화</li>
        <li>지역 규정 준수 요구사항 충족</li>
        <li>재해 복구 및 가용성 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>주요 사용자 위치와 가까운 AWS 리전 선택</li>
        <li>Amazon CloudFront를 통해 전 세계 엣지 위치에서 콘텐츠 제공</li>
        <li>AWS Local Zones로 특정 대도시 지역에 낮은 지연 시간 제공</li>
        <li>AWS Outposts로 온프레미스 환경에 AWS 인프라 확장</li>
        <li>AWS Global Accelerator로 글로벌 트래픽 라우팅 최적화</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudFront — 글로벌 콘텐츠 전송 네트워크</li>
        <li>AWS Global Accelerator — 글로벌 트래픽 최적화</li>
        <li>AWS Local Zones — 대도시 지역 근접 인프라</li>
        <li>AWS Outposts — 온프레미스 AWS 인프라</li>
      </ul>
      <PageNav />
    </article>
  );
}
