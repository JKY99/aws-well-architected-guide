import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf3Bp03Page() {
  return (
    <article className="doc-content">
      <h1>PERF03-BP03 — 스토리지 구성 평가</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>스토리지 서비스의 구성 옵션(RAID, 프로비저닝된 IOPS, 스루풋)을 워크로드의 성능 요구사항에 맞게 조정합니다.</p>
      <h2>원하는 결과</h2>
      <p>성능 요구사항을 충족하는 최적화된 스토리지 구성으로 예측 가능하고 일관된 I/O 성능을 달성합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>스토리지 서비스의 기본 구성을 그대로 사용</li>
        <li>필요 이상의 고성능 스토리지를 과도하게 프로비저닝</li>
        <li>성능 테스트 없이 구성 결정</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>정의된 성능 SLA 달성</li>
        <li>필요에 맞는 프로비저닝으로 비용 최적화</li>
        <li>예측 가능한 I/O 성능 확보</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>EBS io2 Block Express로 고성능 블록 스토리지 구성</li>
        <li>워크로드 요구사항에 맞는 프로비저닝된 IOPS 설정</li>
        <li>EBS 최적화 인스턴스를 사용하여 전용 I/O 대역폭 확보</li>
        <li>성능 벤치마크 테스트로 구성 유효성 검증</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EBS (io2 Block Express)</li>
        <li>Amazon EFS (성능 모드)</li>
        <li>Amazon FSx</li>
      </ul>
      <PageNav />
    </article>
  );
}
