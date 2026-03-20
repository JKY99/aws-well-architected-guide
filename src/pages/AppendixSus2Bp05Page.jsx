import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus2Bp05Page() {
  return (
    <article className="doc-content">
      <h1>SUS02-BP05 — 수행 활동에 맞게 팀 구성원 리소스 최적화</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮은 수준입니다.</p>
      </div>

      <p>
        팀 구성원에게 제공되는 리소스를 최적화하여 필요를 지원하면서 환경적 지속 가능성 영향을 최소화합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        클라우드 지원 애플리케이션의 전반적인 효율성을 개선합니다. 팀 구성원 디바이스 및 리소스로
        인한 환경적 지속 가능성 영향을 줄이고 실제 필요에 맞게 리소스 할당을 개선합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>클라우드 애플리케이션 전반적인 효율성에 대한 팀 구성원 디바이스 영향을 무시하는 경우</li>
        <li>팀 구성원이 사용하는 리소스를 수동으로 관리하고 업데이트하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>클라우드 지원 애플리케이션의 전반적인 효율성 개선</li>
        <li>팀 구성원 디바이스로 인한 환경적 영향 감소</li>
        <li>운영 비용 절감 및 원격 협업 지원</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>팀 구성원이 사용하는 리소스, 예상 수명 주기, 재정적·지속 가능성 영향을 파악합니다.</li>
        <li>저활용 고성능 단일 사용자 시스템 대신 높은 활용도의 확장 가능한 인프라에서 복잡한 작업(렌더링, 컴파일)을 수행합니다.</li>
        <li>Amazon WorkSpaces, Amazon AppStream 2.0과 같은 가상 데스크톱·애플리케이션 스트리밍을 배포하여 디바이스 요구 사항을 제한합니다.</li>
        <li>Amazon Chime 또는 AWS Wickr와 같은 도구로 원격 협업을 장려하여 이동과 탄소 배출을 줄입니다.</li>
        <li>AWS Systems Manager Fleet Manager와 같은 원격 디바이스 관리 솔루션을 구현하여 출장을 줄입니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon WorkSpaces — 가상 데스크톱 솔루션</li>
        <li>Amazon AppStream 2.0 — 애플리케이션 스트리밍</li>
        <li>NICE DCV — 원격 시각화</li>
        <li>AWS Systems Manager Fleet Manager — 원격 노드 관리</li>
        <li>Amazon Chime — 원격 협업</li>
        <li>AWS Wickr — 보안 통신</li>
      </ul>

      <PageNav />
    </article>
  );
}
