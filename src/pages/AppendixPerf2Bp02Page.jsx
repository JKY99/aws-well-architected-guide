import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf2Bp02Page() {
  return (
    <article className="doc-content">
      <h1>PERF02-BP02 — 사용 가능한 컴퓨팅 구성 및 기능 이해</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 보통</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 보통입니다.</p>
      </div>
      <p>선택한 컴퓨팅 서비스에서 사용 가능한 구성 옵션과 기능을 이해합니다. 인스턴스 유형별 특성, 네트워크 성능, 스토리지 옵션, 특수 하드웨어 기능 등을 파악합니다.</p>
      <h2>원하는 결과</h2>
      <p>사용 가능한 컴퓨팅 구성 및 기능을 완전히 이해하여 워크로드 성능을 최적화하는 올바른 구성을 선택합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>사용 가능한 컴퓨팅 기능을 파악하지 않아 기본 설정만 사용</li>
        <li>인스턴스 유형별 특성과 제한을 이해하지 않고 선택</li>
        <li>고급 네트워킹 및 스토리지 기능을 활용하지 않음</li>
        <li>새로운 인스턴스 기능을 기존 워크로드에 적용할 기회를 놓침</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>컴퓨팅 기능을 최대한 활용하여 성능 향상</li>
        <li>올바른 구성으로 예상치 못한 성능 저하 방지</li>
        <li>새로운 기능 도입으로 지속적인 성능 개선</li>
        <li>비용 대비 최대 성능 달성</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS 문서에서 각 인스턴스 유형의 특성(vCPU, 메모리, 네트워크, 스토리지) 파악</li>
        <li>EC2 Enhanced Networking, EFA 등 고급 네트워킹 기능 검토</li>
        <li>인스턴스 스토어, EBS 최적화 등 스토리지 구성 옵션 이해</li>
        <li>GPU, FPGA, 커스텀 칩 등 특수 하드웨어 가속 기능 파악</li>
        <li>AWS re:Invent 및 릴리스 노트를 통해 새로운 컴퓨팅 기능 지속 추적</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 — 다양한 인스턴스 유형 및 구성 옵션</li>
        <li>AWS Nitro System — 고성능 하이퍼바이저 기반 인프라</li>
        <li>Amazon EC2 Enhanced Networking — 고성능 네트워크</li>
        <li>AWS Graviton — ARM 기반 고효율 프로세서</li>
      </ul>
      <PageNav />
    </article>
  );
}
