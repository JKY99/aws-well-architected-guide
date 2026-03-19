import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus5Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SUS05-BP04 — 새로운 에너지 효율적인 하드웨어 빠르게 채택</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>
        AWS가 출시하는 새로운 에너지 효율적인 하드웨어와 인스턴스 유형을 신속하게 평가하고 채택합니다.
        반도체 기술의 발전으로 신규 인스턴스 세대는 이전 세대보다 훨씬 높은 에너지 효율을 제공합니다.
        정기적인 인스턴스 유형 검토 프로세스를 수립하여 최신 효율적인 하드웨어를 지속적으로 활용하십시오.
      </p>
      <h2>원하는 결과</h2>
      <p>
        워크로드가 항상 합리적인 시간 내에 최신 세대의 효율적인 하드웨어로 마이그레이션되어
        기술 발전에 따른 에너지 효율 개선 혜택을 지속적으로 누립니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>수년 동안 동일한 인스턴스 유형을 검토 없이 사용하는 것</li>
        <li>신규 인스턴스 출시를 모니터링하지 않는 것</li>
        <li>하드웨어 변경 시 테스트 비용을 이유로 검토를 연기하는 것</li>
        <li>레거시 소프트웨어 의존성으로 인해 새 인스턴스 유형으로의 전환을 차단하는 것</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>새 인스턴스 세대의 향상된 에너지 효율로 탄소 발자국 지속 감소</li>
        <li>최신 하드웨어의 성능 향상으로 동일 비용 대비 더 많은 처리량 확보</li>
        <li>구형 인스턴스 대비 비용 절감 효과 지속 실현</li>
        <li>최신 AWS 혁신을 워크로드에 빠르게 반영하는 조직 역량 강화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>분기별 인스턴스 유형 검토 프로세스를 수립하고 최신 세대 출시 여부 확인</li>
        <li>AWS Compute Optimizer의 최신 인스턴스 권장사항을 정기적으로 모니터링</li>
        <li>신규 인스턴스 유형을 스테이징 환경에서 먼저 테스트하여 호환성 검증</li>
        <li>IaC(Infrastructure as Code)를 활용하여 인스턴스 유형 변경을 빠르게 롤아웃</li>
        <li>AWS 블로그 및 What's New 페이지를 구독하여 신규 인스턴스 출시 알림 수신</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Compute Optimizer — 최신 인스턴스 유형으로의 전환 권장사항</li>
        <li>Amazon EC2 인스턴스 유형 — 최신 세대 인스턴스 비교 정보</li>
        <li>AWS What's New — 신규 하드웨어 및 인스턴스 출시 공지</li>
        <li>AWS Graviton 로드맵 — 차세대 프로세서 발전 방향</li>
        <li>AWS Infrastructure Event Management — 대규모 마이그레이션 지원</li>
      </ul>
      <PageNav />
    </article>
  );
}
